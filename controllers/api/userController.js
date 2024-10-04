const bcrypt = require('bcrypt');
const User = require('../../models/userModel');

const createUser = async function (userInfo) {
    try {
        const salt = await bcrypt.genSalt(13);
        const encryptedPassword = await bcrypt.hash(userInfo.password, salt);
        const newUserData = {
            username: userInfo.username,
            password: encryptedPassword,
            favoritePokemon: [],
        }

        const databaseUser = await User.create(newUserData);

        return databaseUser;
    } catch (error) {
        throw error;
    }
}

const getUsers = async function () {
    try {
        const users = await User.find({});

        return users;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUsers,
}