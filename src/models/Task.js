var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    userId: {
        type: mongoose.Schema.ObjectId
    },
    title: {
        type: String,
        required: [true, "Title not provided"]
    },
    description: {
        type: String,
        required: [true, "Description not provided"]
    },
    duedate: {
        type: Date,
        required: [true, "Date not provided "]
    }
});

module.exports = mongoose.model("Task", taskSchema);