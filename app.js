const express = require('express');

const mongoose = require('mongoose')
const Model = require('./model.js')

const app = express()

app.use(express.json())
//  add data 
router.post('/post', async (req, res) => {
    const data = new Model({
        productId: req.body.productId,
        quantity: req.body.quantity,
        opration: req.body.opration,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//  delete data 
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})