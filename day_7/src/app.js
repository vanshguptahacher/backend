const express = require("express")
const nodeModel = require("./models/notes.model")

const app = express()


app.use(express.json())

app.post("/notes",async(req,res )=> {
    const {title,description} = req.body

    const note = await nodeModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created",
        note
    })

})

module.exports = app

