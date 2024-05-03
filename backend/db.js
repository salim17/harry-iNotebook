const mongoose = require("mongoose");
const mongoURI =
  "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

/** If you add await in an async method the execution waits where ever you use await. so at line 7 it will wait for the promise to resolve */
const connectToMongo = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch((err) => console.log(err));
  console.log(
    "even though i am inside async function, i will wait for await...  "
  );
};

module.exports = connectToMongo;
