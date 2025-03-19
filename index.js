import express from "express";
import bodyParser from "body-parser";


import { sendMessageTokafka } from "./controller.js";
 import kafkaConsumer from "./consumer.js";
 import { GROUP_ID, TOPIC_NAME } from "./constants.js";

const app = express();
const jsonParser = bodyParser.json();

app.get("/api/test", (req, res, next) => {
  console.log("hello from kalfka");
  return res.send(`<h2>hello kafka</h2>`);
});

app.post("/api/test", jsonParser,sendMessageTokafka);

const consumer = new kafkaConsumer(GROUP_ID);
consumer.startConsumer(TOPIC_NAME, (topic, partition, value) => {
  // console.log("Topic: ", topic, "Partition", partition);
  // console.log("📨 Receive message: ", value);
});

app.listen(3005, () => {
  console.log("app is running on port 9091");
});
