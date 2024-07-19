const { Router } = require('express')
const { getUsers } = require('../controller/controller')


const router = new Router();

router.get("/soyTA", getUsers);

module.exports = router;