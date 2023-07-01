const { User } = require('../models');

const createUser = async (userOptions) => {
    try {
        const newUser = await User.create(userOptions);
        return newUser;
    } catch (error) {
        console.error('Error during creating new User: ', error);
    }
};

const getUser = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        return user;
    } catch (error) {
        console.error('Error during fetching User: ', error);
        throw error;
    }
};

const validateUser = async (user, password) => {
    try {
        const user = await User.findAll({ where: { userName: user, password}});
        if (user) {
            return user;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { createUser, getUser, validateUser };