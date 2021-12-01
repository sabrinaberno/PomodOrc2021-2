import { model, Schema } from "mongoose";

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  tasks:[{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }]

});

export default model("List", listSchema);
