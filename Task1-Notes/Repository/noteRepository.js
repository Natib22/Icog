const fs = require('fs-extra');
const path = require('path');

const filePath = path.join(__dirname, 'database.json');

class NoteRepository {
    
    async getNotesByUserId(userId) {
        const data = await fs.readJson(filePath);
        return data.notes.filter(note => note.userId === userId);
      }
    async createNote(note) {
        const data = await fs.readJSON(filePath);
        data['notes'].push(note);
        await fs.writeJSON(filePath, data);
    }
   
}
module.exports = new NoteRepository();