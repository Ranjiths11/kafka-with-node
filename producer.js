import kalfa from "./config.js";

class KafkaProducer {
  constructor() {
    this.producer = kalfa.producer;
  }

  async producer(topic, messages) {
    try {
      await this.producer.connect();
      await this.producer.send({
        topic: "helo",
        messages:"hello bro",
      });
    } catch (error) {
      console.error(error);
    } finally {
      await this.producer.disconnect();
    }
  }
}

export default KafkaProducer;
