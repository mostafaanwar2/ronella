const Food = require('../models/food');

exports.getAllFoods = async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
};

exports.createFood = async (req, res) => {
  const { name, description, price } = req.body;
  const imageUrl = req.file.path;
  const newFood = new Food({ name, description, price, imageUrl });
  await newFood.save();
  res.status(201).json(newFood);
};

exports.updateFood = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  if (req.file) updateData.imageUrl = req.file.path;
  const food = await Food.findByIdAndUpdate(id, updateData, { new: true });
  res.json(food);
};

exports.deleteFood = async (req, res) => {
  const { id } = req.params;
  await Food.findByIdAndDelete(id);
  res.json({ message: 'Deleted' });
};
