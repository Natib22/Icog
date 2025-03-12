const fs = require('fs-extra');
const path = require('path');

const filePath = path.join(__dirname, 'database.json');

class UserRepository {

    async getAllUsers() {
        const data = await fs.readJSON(filePath);
        return data['users'];
    }
    async createUser(user) {
        const data = await fs.readJSON(filePath);
        data['users'].push(user);
        await fs.writeJSON(filePath, data);
    }
}
module.exports = new UserRepository();