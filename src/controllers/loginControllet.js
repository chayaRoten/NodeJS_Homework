const usersService = require('../services/login.service')
require('dotenv').config()

const login = async (req, res) => {
  const { email, password } = req.body
  const login = await usersService.login(email, password)
  res.send(login)
}

const signUp = async (req, res) => {
  // eslint-disable-next-line camelcase
  const { first_name, last_name, email, password } = req.body
  const signUp = await usersService.signUp(first_name, last_name, email, password)
  res.send(signUp)
}

module.exports = {
  login,
  signUp
}
