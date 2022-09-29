import mongoose from "mongoose";

const connectDatabase = (uri: string) => {
  mongoose.connect(uri, {
  }).then(con => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  })
}

export default connectDatabase;