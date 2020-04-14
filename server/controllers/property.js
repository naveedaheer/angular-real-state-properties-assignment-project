const Property = require("../models/property-model");

getProperties = async (req, res) => {
    await Property
    .find()
    .then((items) => {
      return res.status(200).json({
        success: true,
        properties: items
      });
    })
    //if there's an issue with getting then give this error
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error,
        message: "Something went wrong!",
      });
    });
};

addProperty = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a property to add",
    });
  }
  const propertyData = new Property(body);
  await propertyData
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Property added!'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        success: false,
        message: 'Something went wrong!'
      })
    })
};

updateProperty = async (req, res) => {
  await Property.update({_id: req.params.id}, req.body).then(() => {
      return res.status(200).json({
        success: true,
        message: "Property updated"
      });
  }).catch((error) => {
    return res.status(400).json({
      error,
      success: false,
      message: "Property not updated",
    });
  });
};

deleteProperty = async (req, res) => {
  await Property.remove({ _id: req.params.id }).then(() => {
    return res.status(200).json({
      success: true,
      message: "Property deleted",
    });
  })
    .catch((error) => {
      return res.status(400).json({
        error,
        success: false,
        message: "Property not deleted",
      });
    })
}

module.exports = {
    getProperties,
    addProperty,
    updateProperty,
    deleteProperty
};
