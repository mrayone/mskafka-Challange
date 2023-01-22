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
    autoCommit: true,
    eachMessage: async ({topic, partition, message, heartbeat})=> {
      // throw Error()
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
      console.log(`${topic} ${prefix} ${JSON.stringify(message.headers)}- ${message?.key}- ${message.value}`)

      await heartbeat()
    }
  })
}

run().catch(console.error)