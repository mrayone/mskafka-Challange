import { Router } from 'express';
import { CompressionTypes } from 'kafkajs';
const router = Router();

router.get('/tracker', (req, resp) => {

  req.producer.send({
    topic: 'tracker-status',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
    compression: CompressionTypes.GZIP
  })

  return resp.json({
    ok: true
  });
})

export default router;