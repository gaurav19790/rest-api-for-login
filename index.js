import express from "express"
const app = express();
import home from "./routers/home.js"
import login from "./routers/login.js"
app.use(express.json());

app.use("/login", login)
app.use("/", home);
app.listen(3000, () => {
    console.log("running port 3000");
})