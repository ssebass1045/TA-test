const express = require('express');
require('dotenv').config();
const router = require('./Router/index');

const server = express();
server.use(express.json());
server.use(router);

module.exports = server;