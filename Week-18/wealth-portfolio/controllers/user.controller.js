const ObjectId = require("mongoose").Types.ObjectId;
// const userAggretaion = require("../aggregation/lead.aggregation");
const User = require("../models/user.model");
// const AWS = require("aws-sdk");
// const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  console.log("GET USERS");
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    console.log("req.body__",req.body)
    const users = await User.findOne({ email: req.body.email });
    if (users) {
      return res.json({
        msg: "User Already Exist",
      });
    }
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUsers,
  createUser,
};
