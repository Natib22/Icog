const Note = require('../Domain/Note');
const NoteRepository = require('../Repository/noteRepository');

const createNote = async (userId, content) => {
    const notes = await NoteRepository.getNotesByUserId(userId);
    const id = notes.length + 1;
    const note = new Note(id, userId, content);
    await NoteRepository.createNote(note);
    return note;
}
const getNotesByUserId = async (userId) => {
    return await NoteRepository.getNotesByUserId(userId);
}
module.exports = {createNote, getNotesByUserId};
