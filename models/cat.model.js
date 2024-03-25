const { Schema, model } = require("mongoose");

const catSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "A Cat name is required!"],
            unique: true,
            trim: true
        },
        location: {
            type: {
                type: String,
                enum: ["Point"],
                default: "Point"
            },
            coordinates: {
                type: [Number],
                default: [0, 0],
            }
        },
        image: {
            type: String,
            default: 'https://cdn2.thecatapi.com/images/dmf.jpg'
        },

    }
);

catSchema.index({ 'location': '2dsphere' });

const Cat = model("Cat", catSchema)

module.exports = Cat