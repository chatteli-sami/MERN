import Note from "../models/note.model.js";

const noteController = {
  // -----------create note
  create: async (req, res) => {
    try {
      const addNote = await Note.create(req.body);
      res.json(addNote);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  },

  // ------------get all notes
  getAll: async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  },

  // ------------get one note
  getOne: async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      res.json(note);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  },

  //-------------update note
  update: async (req, res) => {
    try {
      Options = { new: true, runValidators: true };
      const editNote = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        Options
      );
      res.json(editNote);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  },

  //------------delete note
  delete: async (req, res) => {
    try {
      const deleteNote = await Note.findByIdAndDelete(req.params.id);
      res.json(deleteNote);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  },
};

export default noteController;
