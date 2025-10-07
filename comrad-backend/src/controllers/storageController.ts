import { Request, Response } from 'express';
import { init0G } from '../config/0gConfig';
import { Workflow } from '../models/workflow';

export const uploadWorkflow = async (req: Request, res: Response) => {
  try {
    const { workflow, fileName = 'workflow.json' } = req.body as { workflow: Workflow; fileName?: string };
    const { signer, indexer } = await init0G();

    const jsonContent = JSON.stringify(workflow, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const file = await ZgFile.fromBlob(blob, fileName);

    const [tree, treeErr] = await file.merkleTree();
    if (treeErr) throw new Error(`Merkle tree error: ${treeErr}`);

    const [tx, uploadErr] = await indexer.upload(file, process.env.RPC_URL!, signer);
    if (uploadErr) throw new Error(`Upload error: ${uploadErr}`);

    await file.close();
    res.status(200).json({ rootHash: tree?.rootHash(), txHash: tx });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const downloadWorkflow = async (req: Request, res: Response) => {
  try {
    const { rootHash } = req.params;
    const { indexer } = await init0G();

    const filePath = `./temp-${rootHash}.json`;
    const err = await indexer.download(rootHash, filePath, true);
    if (err) throw new Error(`Download error: ${err}`);

    const fs = require('fs');
    const jsonContent = fs.readFileSync(filePath, 'utf8');
    const workflow: Workflow = JSON.parse(jsonContent);
    fs.unlinkSync(filePath);

    res.status(200).json(workflow);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};