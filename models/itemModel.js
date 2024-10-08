const mongoose=require('mongoose')

const itemSchema=mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please enter a item name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const Item= mongoose.model('Item',itemSchema)

module.exports=Item
