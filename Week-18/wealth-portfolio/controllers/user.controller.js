const ObjectId = require("mongoose").Types.ObjectId;
// const userAggretaion = require("../aggregation/lead.aggregation");
const User = require("../models/user.model");
// const AWS = require("aws-sdk");
// const uuid = require("uuid").v4;
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
    console.log("GET USERS")
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    getUsers,
  // createUser,
  // updateUser,
  // deleteUser,
  // register,
  // login,
  // getUserById,
  // getManagersByCompany,
  // getSalesByCompany
};
