const getAllProducts = async (req,res) => {
    res.status(200).json({ msg:" I am AllProducts "});
    
};
const getAllProductsTesting = async (req,res) => {
    res.status(200).json({ msg:" I am AllProductsTesting "});
    
};
module.exports = {
    getAllProducts,
    getAllProductsTesting
}; 

// Controllers File For API Create