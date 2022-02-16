import * as dotenv from "dotenv";
import express from "express";
import router from "./server"

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
 }
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
router(app); 

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});