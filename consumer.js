import kalfa from "./config.js";

class kafkaConsumer {
  constructor(groupId) {
    this.groupId = groupId
    this.consumer = kalfa.consumer({ groupId });
  }

  async startConsumer(topic, callback) {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({ topic, fromBeginning: true });
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          const value = message.value.toString();
          callback(topic, partition, value);
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default kafkaConsumer;
