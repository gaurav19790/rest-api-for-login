import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema({
    name: String,
    userName: String,
    password: String,
})
export default mongoose.model("cards", mongooseSchema)
const dbUrl = "mongodb+srv://gauravrajput19790:gaurav12@cluster0.xkdv9e6.mongodb.net/"
const db = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log("connected to db")
    } catch (error) {
        console.error("hello ", error)
    }

}
db();