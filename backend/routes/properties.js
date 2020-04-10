const express = require("express");
const multer = require("multer");

const Property = require("../models/property");

const router = express.Router();

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/jpg": "jfif"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});

router.post(
  "",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    console.log(url + "/images/" + req.file.filename);
    const property = new Property({
      type: req.body.type,
      city: req.body.city,
      price: req.body.price,
      refNumber: req.body.refNumber,
      noOfBedrooms: req.body.noOfBedrooms,
      description: req.body.description,
      image: url + "/images/" + req.file.filename
    });
    property
      .save()
      .then(createdProperty => {
        res.status(201).json({
          message: "Property added successfully"
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Creating a property failed!"
        });
      });
  }
);

router.put(
  "/:id",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    let image = req.body.image;
    console.log("ssssssssssssss " + req.file);
    //if (req.file) {
      const url = req.protocol + "://" + req.get("host");

      imagePath = url + "/images/" + req.file.filename;
    //}
    const property = new Property({
      _id: req.body.id,
      type: req.body.type,
      city: req.body.city,
      price: req.body.price,
      refNumber: req.body.refNumber,
      noOfBedrooms: req.body.noOfBedrooms,
      description: req.body.description,
      image: url + "/images/" + req.file.filename
    });
    Property.updateOne({ _id: req.params.id}, property)
      .then(result => {
        if (result.nModified > 0) {
          res.status(200).json({ message: "Update successful!" });
        } else {
          res.status(401).json({ message: "Not authorized!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't udpate post!"
        });
      });
  }
);

router.get("", (req, res, next) => {
    Property.find({},function (err,data){
        if (err) throw err;
        console.log("Hereee is all property data: " + data);
        res.send(data);
    });
});

 /* const offerQuery = Offer.find();
  let fetchedOffers;
  offerQuery
    .then(documents => {
      fetchedOffers = documents;
      return Offer.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Offers fetched successfully!",
        offers: fetchedOffers,
        maxOffers: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching offers failed!"
      });
    });
});
*/
router.get("/:id", (req, res, next) => {
  console.log("getById: " + req.params.id);
  Property.findById(req.params.id)
    .then(property => {
      if (property) {
        res.status(200).json(property);
      } else {
        res.status(404).json({ message: "Property not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Property failed!"
      });
    });
});

  router.delete("/:id", (req, res, next) => {
    console.log("Inside backend delete", req.params.id);
  Property.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting property failed!"
      });
    });
});

module.exports = router;
