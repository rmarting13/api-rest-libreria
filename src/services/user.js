const userProvider = require('../providers/user'); // se necesita del provider de user, ya que este módulo es el encargado de crear un usuario

const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    if (user) {
        // Lógica de negocio
        console.log('User Found');
    }
    return 
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