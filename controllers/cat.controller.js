const { Types } = require('mongoose');
const Cat = require('../models/cat.model');

const listAllCats = async (_req, res, next) => {
  try {
    const cats = await Cat.find().sort({ createdAt: -1 }).lean();
    res.status(200).json(cats);
  } catch (err) {
    next(err);
  }
};

const getOneCat = async (req, res, next) => {
  try {
    const { cat_id } = req.params;

    if (!Types.ObjectId.isValid(cat_id)) {
      return res.status(400).json({ msg: 'Invalid cat id!' });
    }

    const cat = await Cat.findById(cat_id).select(
      '-createdAt -updatedAt'
    );
    if (!cat) {
      return res.status(404).json({ msg: 'Cat not found!' });
    }
    res.status(200).json(cat);
  } catch (err) {
    next(err);
  }
};

const createOneCat = async (req, res, next) => {
  const {
    name,
    location,
    image,

  } = req.body;
  try {
    if (!name || !location || !image) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }


    await Cat.create({
      name,
      location,
      image,
    });

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const editOneCat = async (req, res, next) => {
  try {
    const { cat_id } = req.params;
    const {
      name,
      location,
      image,

    } = req.body;

    if (!name || !location || !image) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    /*   if (!cuisine_type || !operating_hours || !reviews) {
        return res.status(400).json({ msg: 'Please fill in all fields!' });
      } */

    if (!Types.ObjectId.isValid(cat_id)) {
      return res.status(400).json({ msg: 'Invalid cat id!' });
    }

    const cat = await Cat.findByIdAndUpdate(
      cat_id,
      {
        name,
        location,
        image,

      },
      { new: true }
    ).select('-createdAt -updatedAt');

    if (!cat) {
      return res.status(404).json({ msg: 'Cat not found!' });
    }

    res.status(200).json(cat);
  } catch (err) {
    next(err);
  }
};

const deleteOneCat = async (req, res, next) => {
  try {
    const { cat_id } = req.params;

    if (!Types.ObjectId.isValid(cat_id)) {
      return res.status(400).json({ msg: 'Invalid cat id!' });
    }
    const cat = await Cat.findByIdAndDelete(cat_id);
    if (!cat) {
      return res.status(404).json({ msg: 'Cat not found!' });
    }
    res.status(200).json({ msg: 'Cat successfully deleted!' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  listAllCats,
  getOneCat,
  createOneCat,
  editOneCat,
  deleteOneCat,
};
