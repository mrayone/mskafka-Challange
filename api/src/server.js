import express from 'express';
import { Kafka } from 'kafkajs';
import routes from './routes';
const app = express();

const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
  retry: {
    initialRetryTime: 300,
    retries: 8
  }
})
const producer = kafka.producer();

async function run() {
  await producer.connect();
  app.use(async (req, resp, next) => {

    req.producer = producer;

    next();
  });


  app.use(routes);
  app.listen(3333, () => {
    console.log('🚀️  Back-end started on port 3333!')
  })
}


run().catch(console.error)