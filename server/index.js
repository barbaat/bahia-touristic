const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

const { loadEnvironmentConfig } = require('./config/environment');
const { createAvailabilityRouter } = require('./routes/availabilityRoutes');

dotenv.config();

const environment = loadEnvironmentConfig();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
  }),
);

app.get('/api/health', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

app.use(
  '/api/availability',
  createAvailabilityRouter({
    sheetUrl: environment.googleSheetUrl,
    sheetGid: environment.googleSheetGid,
    defaultApartmentId: environment.defaultApartmentId,
  }),
);

const server = app.listen(environment.port, () => {
  console.log(`API de disponibilidad activa en http://localhost:${environment.port}`);
});

/**
 * @returns {Promise<void>}
 */
async function shutdownServer() {
  await new Promise((resolve) => {
    server.close(() => {
      resolve();
    });
  });
}

process.on('SIGINT', () => {
  shutdownServer()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
});

process.on('SIGTERM', () => {
  shutdownServer()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
});
