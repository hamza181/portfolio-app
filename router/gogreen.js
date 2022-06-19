const express = require("express");
const router = express.Router();

const GoGreenSchema = require("../model/gogreenSchema");
const GoGreenGardenerSchema = require("../model/gogreenGardenerSchema");

router.post("/add-plant", async (req, res) => {
  const { area, gardenerName, paymentMethod, plantId, plantName } = req.body;

  try {
    const user = new GoGreenSchema({
      area,
      gardenerName,
      paymentMethod,
      plantId,
      plantName,
    });

    const userRegister = await user.save();

    if (userRegister) {
      return res.status(200).json({
        status: "success",
        message: "Plant added successfully",
        data: userRegister,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

router.get("/plants", async (req, res, next) => {
  let note;
  try {
      note = await GoGreenSchema.find();
  } catch (error) {
    res.status(500).json({
        message: "Fetching notes failed!",
    });
}
// res.json({note});
res.json({ plants: note.map((p) => p.toObject({ getters: true })) });
});

router.post("/add-gardener", async (req, res) => {
  const { requestedPlants, requestedArea, name, contact } = req.body;

  try {
    const user = new GoGreenGardenerSchema({
        requestedPlants, requestedArea, name, contact
    });

    const userRegister = await user.save();

    if (userRegister) {
      return res.status(200).json({
        status: "success",
        message: "Gardener added successfully",
        data: userRegister,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

router.get("/gardeners", async (req, res, next) => {
    let note;
    try {
        note = await GoGreenGardenerSchema.find();
    } catch (error) {
      res.status(500).json({
          message: "Fetching notes failed!",
      });
  }
  // res.json({note});
  res.json({ gardeners: note.map((p) => p.toObject({ getters: true })) });
  });

module.exports = router;
