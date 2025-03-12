const userServices = require("../Usecases/userUsecase");
const noteServices = require("../Usecases/noteUsecase");

const registerUser = async (req, res) => {
    console.log(req.body);
  const { fullName } = req.body;
  const user = await userServices.registerUser(fullName);
  res.status(201).json(user);
};

const addNote = async (req, res) => {
  const { userId, content } = req.body;
  const note = await noteServices.createNote(userId, content);
  res.status(201).json(note);
};
const getNotesByUserId = async (req, res) => {
  const { userId } = req.params;
  
  const notes = await noteServices.getNotesByUserId(userId);
  res.status(200).json(notes);
};

module.exports = { registerUser, addNote, getNotesByUserId };
