import { c as connect } from "./mongodb.js";
connect().then(() => {
  console.log("MongoDB started");
}).catch((e) => {
  console.log("MongoDB failed to start");
  console.log(e);
});
