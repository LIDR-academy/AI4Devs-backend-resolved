import express from 'express';
import { getPositionCandidates } from '../presentation/controllers/positionController';

const router = express.Router();

router.get('/:id/candidates', getPositionCandidates);

export default router;