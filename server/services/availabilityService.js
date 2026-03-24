const APARTMENT_COLUMN_ALIASES = ['apartamento', 'apartment', 'propiedad', 'inmueble', 'alojamiento'];
const DATE_COLUMN_ALIASES = ['fecha', 'date', 'dia', 'day', 'available_date', 'fecha_reserva'];
const START_DATE_COLUMN_ALIASES = ['fecha_inicio', 'inicio', 'desde', 'start_date', 'check_in', 'entrada'];
const END_DATE_COLUMN_ALIASES = ['fecha_fin', 'fin', 'hasta', 'end_date', 'check_out', 'salida'];
const AVAILABILITY_COLUMN_ALIASES = ['disponible', 'available', 'is_available', 'estado'];
const AVAILABLE_VALUES = new Set(['si', 'sí', 'true', '1', 'yes', 'y', 'libre', 'disponible']);
const RESERVED_VALUES = new Set(['no', 'false', '0', 'ocupado', 'reservado', 'bloqueado', 'blocked']);

/**
 * @param {string} text
 * @returns {string}
 */
function normalizeText(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

/**
 * @param {string[]} headers
 * @param {string[]} aliases
 * @returns {number}
 */
function findColumnIndex(headers, aliases) {
  const normalizedAliases = aliases.map((alias) => normalizeText(alias));
  return headers.findIndex((header) => normalizedAliases.includes(header));
}

/**
 * @param {Date} date
 * @returns {string}
 */
function toDateKey(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @returns {Date | null}
 */
function createUtcDate(year, month, day) {
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

/**
 * @param {string} rawValue
 * @returns {Date | null}
 */
function parseDateValue(rawValue) {
  const value = rawValue.trim();

  if (value.length === 0) {
    return null;
  }

  if (/^\d+(\.\d+)?$/.test(value)) {
    const serialValue = Number(value);

    if (!Number.isFinite(serialValue)) {
      return null;
    }

    const excelEpoch = Date.UTC(1899, 11, 30);
    const milliseconds = Math.round(serialValue * 24 * 60 * 60 * 1000);
    const parsedDate = new Date(excelEpoch + milliseconds);

    return createUtcDate(parsedDate.getUTCFullYear(), parsedDate.getUTCMonth() + 1, parsedDate.getUTCDate());
  }

  const yearFirstMatch = value.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
  if (yearFirstMatch !== null) {
    const year = Number(yearFirstMatch[1]);
    const month = Number(yearFirstMatch[2]);
    const day = Number(yearFirstMatch[3]);

    return createUtcDate(year, month, day);
  }

  const dayFirstMatch = value.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{2,4})$/);
  if (dayFirstMatch !== null) {
    const day = Number(dayFirstMatch[1]);
    const month = Number(dayFirstMatch[2]);
    const rawYear = Number(dayFirstMatch[3]);
    const year = rawYear < 100 ? 2000 + rawYear : rawYear;

    return createUtcDate(year, month, day);
  }

  return null;
}

/**
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {Date[]}
 */
function expandDateRange(startDate, endDate) {
  const normalizedStart = Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate());
  const normalizedEnd = Date.UTC(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate());

  if (normalizedEnd < normalizedStart) {
    return [];
  }

  /** @type {Date[]} */
  const dates = [];

  for (let cursor = normalizedStart; cursor <= normalizedEnd; cursor += 24 * 60 * 60 * 1000) {
    dates.push(new Date(cursor));
  }

  return dates;
}

/**
 * @param {string} csvText
 * @returns {string[][]}
 */
function parseCsvRows(csvText) {
  /** @type {string[][]} */
  const rows = [];
  /** @type {string[]} */
  let currentRow = [];
  let currentCell = '';
  let insideQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const character = csvText[index];

    if (character === '"') {
      const nextCharacter = csvText[index + 1];
      if (insideQuotes && nextCharacter === '"') {
        currentCell += '"';
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }

    if (!insideQuotes && character === ',') {
      currentRow.push(currentCell.trim());
      currentCell = '';
      continue;
    }

    if (!insideQuotes && (character === '\n' || character === '\r')) {
      if (character === '\r' && csvText[index + 1] === '\n') {
        index += 1;
      }

      currentRow.push(currentCell.trim());
      currentCell = '';

      if (currentRow.some((cell) => cell.length > 0)) {
        rows.push(currentRow);
      }

      currentRow = [];
      continue;
    }

    currentCell += character;
  }

  currentRow.push(currentCell.trim());
  if (currentRow.some((cell) => cell.length > 0)) {
    rows.push(currentRow);
  }

  return rows;
}

/**
 * @param {string | undefined} value
 * @returns {boolean}
 */
function isReservedValue(value) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return true;
  }

  const normalizedValue = normalizeText(value);

  if (AVAILABLE_VALUES.has(normalizedValue)) {
    return false;
  }

  if (RESERVED_VALUES.has(normalizedValue)) {
    return true;
  }

  return true;
}

/**
 * @param {string} sheetUrl
 * @returns {string}
 */
function extractSheetId(sheetUrl) {
  const match = sheetUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);

  if (match === null) {
    throw new Error('No se pudo extraer el ID del Google Sheet.');
  }

  return match[1];
}

/**
 * @param {string} sheetUrl
 * @param {string} sheetGid
 * @returns {string}
 */
function buildSheetCsvUrl(sheetUrl, sheetGid) {
  const sheetId = extractSheetId(sheetUrl);
  const params = new URLSearchParams({
    format: 'csv',
    gid: sheetGid,
  });

  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?${params.toString()}`;
}

/**
 * @param {string} csvText
 * @param {string} apartmentId
 * @returns {string[]}
 */
function getReservedDatesFromCsv(csvText, apartmentId) {
  const rows = parseCsvRows(csvText);

  if (rows.length === 0) {
    return [];
  }

  const rawHeaders = rows[0].map((header) => normalizeText(header));
  const apartmentIndex = findColumnIndex(rawHeaders, APARTMENT_COLUMN_ALIASES);
  const dateIndex = findColumnIndex(rawHeaders, DATE_COLUMN_ALIASES);
  const startDateIndex = findColumnIndex(rawHeaders, START_DATE_COLUMN_ALIASES);
  const endDateIndex = findColumnIndex(rawHeaders, END_DATE_COLUMN_ALIASES);
  const availabilityIndex = findColumnIndex(rawHeaders, AVAILABILITY_COLUMN_ALIASES);

  if (dateIndex === -1 && (startDateIndex === -1 || endDateIndex === -1)) {
    throw new Error('No encontramos columnas de fecha en el Google Sheet. Usa `fecha` o `fecha_inicio` + `fecha_fin`.');
  }

  const normalizedApartmentId = normalizeText(apartmentId);
  const today = new Date();
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const reservedDateSet = new Set();

  for (const row of rows.slice(1)) {
    if (apartmentIndex >= 0) {
      const apartmentValue = row[apartmentIndex] ?? '';
      const normalizedApartmentValue = normalizeText(apartmentValue);

      if (
        normalizedApartmentValue.length > 0 &&
        normalizedApartmentId.length > 0 &&
        normalizedApartmentValue !== normalizedApartmentId
      ) {
        continue;
      }
    }

    if (availabilityIndex >= 0 && !isReservedValue(row[availabilityIndex])) {
      continue;
    }

    if (dateIndex >= 0) {
      const parsedDate = parseDateValue(row[dateIndex] ?? '');
      if (parsedDate !== null && parsedDate.getTime() >= todayUtc) {
        reservedDateSet.add(toDateKey(parsedDate));
      }
      continue;
    }

    if (startDateIndex >= 0 && endDateIndex >= 0) {
      const parsedStartDate = parseDateValue(row[startDateIndex] ?? '');
      const parsedEndDate = parseDateValue(row[endDateIndex] ?? '');

      if (parsedStartDate === null || parsedEndDate === null) {
        continue;
      }

      for (const date of expandDateRange(parsedStartDate, parsedEndDate)) {
        if (date.getTime() >= todayUtc) {
          reservedDateSet.add(toDateKey(date));
        }
      }
    }
  }

  return Array.from(reservedDateSet).sort((left, right) => left.localeCompare(right));
}

/**
 * @param {{ sheetUrl: string; sheetGid: string; apartmentId: string }} params
 * @returns {Promise<string[]>}
 */
async function getApartmentAvailability(params) {
  const csvUrl = buildSheetCsvUrl(params.sheetUrl, params.sheetGid);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    const response = await fetch(csvUrl, {
      method: 'GET',
      signal: controller.signal,
      headers: {
        Accept: 'text/csv',
      },
    });

    if (!response.ok) {
      throw new Error(`No se pudo descargar el Google Sheet (status ${response.status}).`);
    }

    const csvText = await response.text();
    return getReservedDatesFromCsv(csvText, params.apartmentId);
  } finally {
    clearTimeout(timeoutId);
  }
}

module.exports = {
  getApartmentAvailability,
};
