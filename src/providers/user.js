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

const getUsers = async (options) => {
    try {
        const users= await User.findAll({ where: { [Op.or]: options}}); // con el operador Op considera el contenido de options con una condición or (al menos uno se cumple)
        return users;
    } catch (error) {
        throw new Error('No User matches with search params');
    }
};

const updateUser = async (userId, user) => {
    try {
        await getUser(userId);
        const [rowsUpdated] = await User.update(user, {
            where: {id: userId },
            returning: true
        });
        console.log(`${rowsUpdated} rows were updated on DB`);
        return User.findByPk(userId);
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => { // eliminación lógica
    try {
        await getUser(userId);
        const [rowsUpdated] = await User.update(
            {active: false},
            { where: { id: userId}}
        );
        console.log(`${rowsUpdated} row was deleted (deactivated) on DB`);
        return User.findByPk(userkId);
    } catch (error) {
        throw error;
    }
};

module.exports = { createUser, getUser, validateUser, getUsers, updateUser, deleteUser };