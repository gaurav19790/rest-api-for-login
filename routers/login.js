import express from "express"
const routers = express.Router();
import Cards from "../db.js"
routers.get("/", async (req, res) => {
    // const data = await Cards.deleteMany({});

    try {
        const data = await Cards.find({ userName: req.body.userName })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("404 Invild user")
    }

})
routers.post("/", async (req, res) => {
    try {
        const data = await req.body;
        Cards.create(await req.body)
        console.log(data)
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(" invaild user")
    }
})


export default routers;