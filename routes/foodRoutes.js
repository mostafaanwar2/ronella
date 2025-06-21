const express = require('express');
const { getAllFoods, createFood, updateFood, deleteFood } = require('../controllers/foodController');
const { upload } = require('../utils/cloudinary');

const router = express.Router();

router.get('/', getAllFoods);
router.post('/', upload.single('image'), createFood);
router.put('/:id', upload.single('image'), updateFood);
router.delete('/:id', deleteFood);

module.exports = router;
