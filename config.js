import { Kafka } from "kafkajs";
import { CLIENT_ID, BROKERS } from "./constants.js";

const kalfkaConfig = {
  clinetId: CLIENT_ID,
  brokers: BROKERS,
};

const kalfa = new Kafka(kalfkaConfig);

export default kalfa;
