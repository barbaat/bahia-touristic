const DEFAULT_SERVER_PORT = 3001;
const DEFAULT_GOOGLE_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/16DI_nQesreGFT_w8dqHMOBNqAzV0cj_aTuG15VUPSB8/edit?usp=sharing';

/**
 * @param {string | undefined} value
 * @returns {number}
 */
function parseServerPort(value) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return DEFAULT_SERVER_PORT;
  }

  const parsedValue = Number(value);

  if (!Number.isInteger(parsedValue) || parsedValue <= 0) {
    return DEFAULT_SERVER_PORT;
  }

  return parsedValue;
}

/**
 * @param {string | undefined} value
 * @returns {string}
 */
function parseStringValue(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim();
}

/**
 * @returns {{ port: number; googleSheetUrl: string; googleSheetGid: string; defaultApartmentId: string }}
 */
function loadEnvironmentConfig() {
  const port = parseServerPort(process.env.PORT);
  const googleSheetUrl = parseStringValue(process.env.GOOGLE_SHEET_URL) || DEFAULT_GOOGLE_SHEET_URL;
  const googleSheetGid = parseStringValue(process.env.GOOGLE_SHEET_GID) || '0';
  const defaultApartmentId = parseStringValue(process.env.DEFAULT_APARTMENT_ID) || 'la-bahia-moana';

  return {
    port,
    googleSheetUrl,
    googleSheetGid,
    defaultApartmentId,
  };
}

module.exports = {
  loadEnvironmentConfig,
};
