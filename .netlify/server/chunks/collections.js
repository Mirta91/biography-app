import { g as getDB } from "./mongodb.js";
const db = getDB();
async function getCollection(collection_name, skip, limit) {
  const data = await db.collection(collection_name).find({}).project({ _id: 0 }).skip(skip).limit(limit).toArray();
  return data;
}
export {
  getCollection as g
};
