import { Router } from 'express';
import { CompressionTypes } from 'kafkajs';
const router = Router();

router.get('/tracker', (req, resp) => {

  req.producer.send({
    topic: 'tracker-status',
    messages: [
      { value: JSON.stringify({
        "value": "aloo"
      }),
        key: "key",
        headers: {
          "client-id": "122324",
          "data-file": "json"    
        }
      },
    ],
    compression: CompressionTypes.GZIP
  })

  return resp.json({
    ok: true
  });
})

export default router;