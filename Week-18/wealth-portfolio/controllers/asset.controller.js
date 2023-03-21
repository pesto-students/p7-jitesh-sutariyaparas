const User = require('../models/user.model')
const Asset = require('../models/asset.model')

const getAllAssets = async (req, res) => {
    console.log("GET Asset");
    try {
      const user = await Asset.find();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  };
  
  const getAssetById = async (req, res) => {
    console.log("GET Asset BY ID");
    try {
      const user = await Asset.findById(req.param.id);
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  };
  
  const createAsset = async (req, res) => {
    try {
      console.log("Register new user", req.body);
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
  