import express from 'express';
import {
  getHealth,
  getStations,
  getAssets,
  getDashboardSummary,
} from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/health', getHealth);
router.get('/stations', getStations);
router.get('/assets', getAssets);
router.get('/dashboard', getDashboardSummary);

export default router;
