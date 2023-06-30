const userProvider = require('../providers/user');

const getUser = (id) => {
    return { id, name: 'Jhon' };
}

const createUser = async (user) => {
    return await userProvider.createUser(user);
};

const upadteUser = (id, user) => {
    // LLamada al provider con el objeto user
    return user;
};

const deleteUser = (id) => {
    return `Deleted user: ${id}`;
};

const queryUser = (name) => {};

module.exports = { getUser, createUser, upadteUser, deleteUser };