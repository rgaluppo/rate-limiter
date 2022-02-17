import express from "express";
import router from "./server"
import config from "config";


const app = express();
router(app); 
const baseUrl = config.get('baseUrl');
const port = config.get('port');
app.listen(port, () => {
    console.log(`Server is running at http://${baseUrl}:${port}`);
});