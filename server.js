const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const Item = require('./models/itemModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT;


//Routes


// Fetch all Items

app.get('/items', async (req, res) => {
    try {
        const items = await Item.find({})
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Fetch an Item by its Id

app.get('/items/:id', async (req, res) => {
    try {
        const { id } = req.params
        const item = await Item.findById(id)
        if(!item)
        {
            return res.status(404).json({message: 'cannot find this item'})
        }
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// Add an Item

app.post('/items', async (req, res) => {
    try {
        const item = await Item.create(req.body)
        res.status(200).json(item)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

// Update an Item

app.put('/items/:id', async (req,res) =>{
    try {
        const { id } = req.params
        const item= await Item.findByIdAndUpdate(id,req.body)
        if(!item)
        {
            return res.status(404).json({message: 'cannot find this item'})
        }
        const uItem= await Item.findById(id)
        res.status(200).json(uItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Delete an Item

app.delete('/items/:id', async (req,res)=>{
    try {
       const {id} = req.params;
       const item= await Item.findByIdAndDelete(id) 
       if(!item)
        {
            return res.status(404).json({message: "cannot find this item "})
        }
        res.status(200).json({message: 'Item succesfully deleted'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})





mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected succesfully')
        app.listen(PORT, () => {
            console.log(`Node API app is running on port ${PORT}`)
        })
    }).catch(() => {
        console.log('Error Occured')
    })