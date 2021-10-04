const express = require("express");
const accountsRouter = require('./accounts/accounts-router')
const { errorHandling } = require('./accounts/accounts-middleware')

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.use(errorHandling);

module.exports = server;
