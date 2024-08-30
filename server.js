import { app } from "./app.js";
import { config } from "dotenv";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";
config({
    path: "./config/config.env"
});
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });
const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`Server is running on PORT ${PORT}`);
    }
});
