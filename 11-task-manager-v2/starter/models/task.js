const mongoose = require("mongoose")
const { Schema, model } = mongoose

const TaskSchema = new Schema({
	name: {
        type: String,
        required: [true, "must provide a name"],
        trim: true,
        maxlength: [20, "name can not more than 20 character"],
    },
	completed: {
        type: Boolean,
        default: false
    }
})

module.exports = model("Task", TaskSchema)
