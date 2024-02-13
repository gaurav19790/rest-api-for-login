import express from "express"
const routers = express.Router();
import Cards from "../db.js"
routers.get("/", async (req, res) => {

    try {
        const response = await Cards.find();
        console.log("data form db", response);
        res.status(200).json(response)

    } catch (error) {
        console.log("error")
        res.status(400).json("hello " + error)
    }


})
routers.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Cards.findById(id);
        console.log("hello", data);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).json("404 not found")
        console.log(error)
    }
    next();
})
// routers.post("/:id", async (req, res) => {
//     Cards.create({ name: req.body.name })
//     res.status(200).json("hello post " + req.params.id + " " + req.body.name);
// })
routers.put("/:id", async (req, res) => {
    try {
        const data = {
            name: req.body.name
        }
        await Cards.update(data)
        await Cards.findByIdAndUpdate(req.params.id, data)
        res.status(200).json("updated")
    }
    catch (err) {
        res.status(400).json("server erro" + err)
    }
})
routers.patch("/:id", async (req, res) => {
    const id = await Cards.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    console.log(await req.body.name)
    res.send(id)
})
export default routers;