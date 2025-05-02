const  express = require('express');
const { route } = require('./routes/products');
const app = express();

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");


app.get("/", (req, res) => {
  res.send("Hello World! WelCome Harsh Website....");
});

// middleware or to set route
app.use("/api/products", products_routes);


const start = async () => {
    try {
        app.listen(PORT, () => {
        console.log(`${PORT} Yes Connect...`);
        });
    }catch (error) {
        console.log(error);
    }
};

start();