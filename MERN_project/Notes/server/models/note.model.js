import { model, Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least 3 characters long"],
      maxLength: [30, "{PATH} must be at most 30 characters long"],
    },

    content: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least 3 characters long"],
      maxLength: [255, "{PATH} must be at most 30 characters long"],
    },

    isImportant: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Note = model("Note", noteSchema);

export default Note;
