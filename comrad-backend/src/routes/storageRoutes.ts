import { Router } from 'express';
import { uploadWorkflow, downloadWorkflow } from '../controllers/storageController';

const router = Router();

router.post('/upload', uploadWorkflow);
router.get('/download/:rootHash', downloadWorkflow);

export default router;