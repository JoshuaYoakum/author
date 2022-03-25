
const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    authorname: {
        type: String,
        required: [true, "everything has a name"],
        minLength: [3, "title must be more than 3 characters long"]
    }
}, {timestamps : true})
module.exports.Author = mongoose.model('Author', AuthorSchema)