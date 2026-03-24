const express = require('express');
const { getApartmentAvailability } = require('../services/availabilityService');

const APARTMENT_ID_PATTERN = /^[a-z0-9-]{3,64}$/;

/**
 * @param {unknown} apartmentId
 * @returns {apartmentId is string}
 */
function isValidApartmentId(apartmentId) {
  return typeof apartmentId === 'string' && APARTMENT_ID_PATTERN.test(apartmentId);
}

/**
 * @param {{ sheetUrl: string; sheetGid: string; defaultApartmentId: string }} settings
 * @returns {import('express').Router}
 */
function createAvailabilityRouter(settings) {
  const router = express.Router();

  router.get('/', async (request, response) => {
    const rawApartmentId = request.query.apartmentId;

    if (rawApartmentId !== undefined && !isValidApartmentId(rawApartmentId)) {
      response.status(400).json({
        error: 'Parametro apartmentId invalido. Usa letras minusculas, numeros y guiones.',
      });
      return;
    }

    const apartmentId = rawApartmentId ?? settings.defaultApartmentId;

    try {
      const reservedDates = await getApartmentAvailability({
        apartmentId,
        sheetUrl: settings.sheetUrl,
        sheetGid: settings.sheetGid,
      });

      response.status(200).json({
        apartmentId,
        reservedDates,
        source: 'google-sheets',
        updatedAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error al consultar disponibilidad:', error);
      response.status(500).json({
        error: 'No se pudo consultar la disponibilidad del apartamento.',
      });
    }
  });

  return router;
}

module.exports = {
  createAvailabilityRouter,
};
