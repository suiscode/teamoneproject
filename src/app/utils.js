import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log('connected');
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
