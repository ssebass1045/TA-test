const getUserService = require("../services/index");

const getUserService = async (req, res) => {
    const getUsers = await getUserService();
    res.status(200).json(getUsers);
};

module.exports = {
    getUsers
};