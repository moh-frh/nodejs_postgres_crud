const db = require("../config/database");

// ==> Method responsible for creating a new 'Product':

exports.createProduct = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
    [product_name, quantity, price]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { product_name, quantity, price },
    },
  });
};

// ==> Method responsible for listing all 'Products':
exports.listAllProducts = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM products ORDER BY product_name ASC"
  );
  res.status(200).send(response.rows);
};
