import mongoose from "mongoose";

// DB CONNECTION START
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
// DB CONNECTION END
