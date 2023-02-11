import express from 'express';
import { authenticate } from './../controllers/auth.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const googleLoginResponse = req.body;
    const data = await authenticate(googleLoginResponse);
    res.status(200).send(data);
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});


router.post('/logout', async (req, res) => {
  try {
    const { token } = req.body;
    // await revokeGoogleToken(token);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;
