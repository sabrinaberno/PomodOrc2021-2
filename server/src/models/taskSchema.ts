import {model, Schema} from "mongoose";

const taskSchema = new Schema ({
    name:{
        type: String,
        required: true,
        unique: true
    },

    checked:{
        type: Boolean,
        default: false
    },

});

export default model("Task", taskSchema);