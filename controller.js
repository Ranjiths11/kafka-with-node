import { TOPIC_NAME } from "./constants.js";
import KafkaProducer from "./producer.js";
export const sendMessageTokafka = async (req, res) => {
  try {
    const { message } = req.body;

    const kafkaProducer = new KafkaProducer();
    const messages = [{ key: "1", value: message }];
    kafkaProducer.producer({ TOPIC_NAME, messages });

    res.status(200).json({
      status: "ok",
      message: "message seded sucessfully",
    });
  } catch (error) {
    console.error(error);
  }
};

// const controller = { sendMessageTokafka };

// export default controller;
