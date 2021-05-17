import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'tracker',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'tracker-group' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'tracker-status', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({topic, partition, message})=> {
      console.log(`${topic} - ${message.value.toString()}`)
    }
  })
}

run().catch(console.error)