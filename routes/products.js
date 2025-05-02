const express = require('express');

const router = express.Router();

const { getAllProducts, getAllProductsTesting } = require("../controllers/products");


router.route("/").get(getAllProducts); //Function and Home 
router.route("/testing").get(getAllProductsTesting); //Testing Mate Function

module.exports = router; //Exporting

// products Router File For Client