const DEFAULT_API_URL = 'http://localhost:3001';
const ENV_APARTMENT_ID = import.meta.env.VITE_APARTMENT_ID;
export const DEFAULT_APARTMENT_ID =
  typeof ENV_APARTMENT_ID === 'string' && ENV_APARTMENT_ID.trim().length > 0 ? ENV_APARTMENT_ID.trim() : 'la-bahia-moana';

/**
 * @typedef {{ apartmentId: string; reservedDates: string[]; source: string; updatedAt: string }} AvailabilityPayload
 */

/**
 * @param {unknown} value
 * @returns {value is AvailabilityPayload}
 */
function isAvailabilityPayload(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const payload = /** @type {{ apartmentId?: unknown; reservedDates?: unknown; source?: unknown; updatedAt?: unknown }} */ (value);

  return (
    typeof payload.apartmentId === 'string' &&
    Array.isArray(payload.reservedDates) &&
    payload.reservedDates.every((item) => typeof item === 'string') &&
    typeof payload.source === 'string' &&
    typeof payload.updatedAt === 'string'
  );
}

/**
 * @returns {string}
 */
function getApiUrl() {
  const environmentUrl = import.meta.env.VITE_API_URL;

  if (typeof environmentUrl === 'string' && environmentUrl.trim().length > 0) {
    return environmentUrl.trim();
  }

  return DEFAULT_API_URL;
}

/**
 * @param {string} apartmentId
 * @param {AbortSignal | undefined} signal
 * @returns {Promise<AvailabilityPayload>}
 */
export async function fetchApartmentAvailability(apartmentId = DEFAULT_APARTMENT_ID, signal) {
  const baseUrl = getApiUrl();
  const query = new URLSearchParams({ apartmentId });
  const response = await fetch(`${baseUrl}/api/availability?${query.toString()}`, {
    method: 'GET',
    signal,
  });

  if (!response.ok) {
    throw new Error('No se pudo obtener la disponibilidad desde la API.');
  }

  const payload = await response.json();

  if (!isAvailabilityPayload(payload)) {
    throw new Error('La respuesta de disponibilidad no tiene el formato esperado.');
  }

  return payload;
}
