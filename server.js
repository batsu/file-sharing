const multer = require("multer")
const mongoose = require("mongoose")

const express = require("express")
const app = express()

const upload = multer({ dest: "uploads" })

mongoose.connect(process.env.DATABASE_URI)

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("hi")
})

app.listen(process.env.PORT)