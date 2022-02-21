const mongoose = require("mongoose")

const goalSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please add a text value"]
    },
    completed: {
        type: Boolean,
        required: true
    },

}, {
    timestamps: true
}
)

module.exports = mongoose.model("goals", goalSchema)