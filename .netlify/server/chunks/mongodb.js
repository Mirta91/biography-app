import { MongoClient } from "mongodb";
const MONGO_URL = "mongodb+srv://admin:admin@testdb.9awek7w.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TestDB";
const client = new MongoClient(MONGO_URL);
async function connect() {
  await client.connect();
}
function getDB() {
  return client.db();
}
export {
  connect as c,
  getDB as g
};
