const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    GET ALL ITEMS
// @access  PUBLIC
router.get("/", (req, res, next) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    CREATE ITEM
// @access  PUBLIC
router.post("/", (req, res, next) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    DELETE ITEM
// @access  PUBLIC
router.delete("/:id", (req, res, next) => {
  Item.findById(req.params.id)
    .then(item => {
      item.remove().then(() =>
        res.json({
          success: true
        })
      );
    })
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
