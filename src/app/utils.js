import mongoose from "mongoose";
const uri = process.env.MONGO;

export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(uri);
    connection.isConnected = db.connections[0].readyState;
    console.log("connected");
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

