const User = require('../Domain/User');
const UserRepository = require('../Repository/userRepository');


const registerUser = async (fullName) => {
    const users = await UserRepository.getAllUsers();
    const id = users.length + 1;
    const user = new User(id, fullName);
    await UserRepository.createUser(user);
    return user;
}

module.exports = {registerUser};