const mongoose = require("mongoose");

const schemaRow = new mongoose.Schema(
    {
        text: {type:String, required:true, minlength:3, maxlength:25, uppercase:true, unique:true},
        date: { type: Date,  default: Date.now }, 
        tag: {type:String, required:true, minlength:3, maxlength:20, uppercase:true, unique:true, enum: ["fritid","arbete", "städa" ]}
    }
)

const Row = mongoose.model("Row", schemaRow);

module.exports = Row;