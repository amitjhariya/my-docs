import mongoose from "mongoose";
import {MONGO_URL,DB_NAME} from './index.js'
const connectToDb = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:DB_NAME
  });

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log(`Connected to MongoDB cluster & Using DB : ${DB_NAME}`);
  });

  connection.on("error", (err) => {
    console.error(`Error connecting to MongoDB: ${err}`);
  });
};

export default connectToDb

// docker-compose exec router01 mongosh --port 27017
// sh.enableSharding("MoviesApp")
// db.adminCommand( { shardCollection: "MoviesApp.movies", key: { oemNumber: "hashed", zipCode: 1, supplierId: 1 } } )