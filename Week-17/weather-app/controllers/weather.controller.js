
const weather = async (req, res) => {
  try {
    console.log(req.params)
    res.json({'success':true});
  } catch (err) {
    console.log(err);
  }
};


module.exports ={ weather }
