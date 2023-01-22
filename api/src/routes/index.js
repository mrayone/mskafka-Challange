import { Router } from 'express';
import { CompressionTypes, ProducerBatch } from 'kafkajs';
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
    acks: 0,
    compression: CompressionTypes.GZIP,
  })

  // const kafkaMessages = [
  //   { 
  //     value: JSON.stringify({
  //     "value": "aloo"
  //   }),
  //     key: "key",
  //     headers: {
  //       "client-id": "122324",
  //       "data-file": "json"    
  //     }
  //   },
  //   { 
  //     value: JSON.stringify({
  //     "value": "alo2"
  //   }),
  //     key: "key",
  //     headers: {
  //       "client-id": "122324",
  //       "data-file": "json"    
  //     }
  //   },
  //   { 
  //     value: JSON.stringify({
  //     "value": "alo3"
  //   }),
  //     key: "key",
  //     headers: {
  //       "client-id": "122324",
  //       "data-file": "json"    
  //     }
  //   },
  // ]

  // const topicMessages = {
  //   topic: 'tracker-status',
  //   messages: kafkaMessages
  // }

  // const batch = {
  //   topicMessages: [topicMessages],
  //   compression: CompressionTypes.GZIP,
  // }

  // req.producer.sendBatch(batch)

  return resp.json({
    ok: true
  });
})

export default router;