const express = require("express");
const Image = require("../models/image");

const router = express.Router();

router.get("", (req, res, next) => {
  Image.find({},function (err,data){
  if (err) throw err;
  console.log("Yoooo" + data);
  res.send(data);
  });
});

router.get("/:id", (req, res, next) => {
  //console.log("getById: " + req.params.id);
  Image.findById(req.params.id, function(err, data){
    if (err) throw err;
    res.send(data);
    //console.log("getById: " + data);
  })
});

module.exports = router;
