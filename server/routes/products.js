const express = require("express");
const router = express.Router();
const db = require("../config/db");

// =====================
// GET All Products
// =====================
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.log("========== MYSQL ERROR ==========");
      console.log(err);
      console.log("================================");

      return res.status(500).json({
        success: false,
        message: err.sqlMessage,
        error: err,
      });
    }

    res.json(results);
  });
});

// =====================
// ADD Product
// =====================
router.post("/", (req, res) => {
  const { name, price, category, description, image } = req.body;

  console.log("Received Product:");
  console.log(req.body);

  const sql = `
    INSERT INTO products
    (name, price, category, description, image)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, price, category, description, image],
    (err, result) => {
      if (err) {
        console.log("========== MYSQL ERROR ==========");
        console.log(err);
        console.log("================================");

        return res.status(500).json({
          success: false,
          message: err.sqlMessage,
          error: err,
        });
      }

      res.status(201).json({
        success: true,
        message: "Bouquet Added Successfully 🌸",
        id: result.insertId,
      });
    }
  );
});

// =====================
// DELETE Product
// =====================
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM products WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.sqlMessage,
        });
      }

      res.json({
        success: true,
        message: "Product deleted successfully",
      });
    }
  );
});

// =====================
// UPDATE Product
// =====================
router.put("/:id", (req, res) => {
  const { name, price, category, description, image } = req.body;
  const id = req.params.id;

  const sql = `
    UPDATE products
    SET name=?, price=?, category=?, description=?, image=?
    WHERE id=?
  `;

  db.query(
    sql,
    [name, price, category, description, image, id],
    (err, result) => {
      if (err) {
        console.log("UPDATE ERROR:", err);

        return res.status(500).json({
          success: false,
          message: err.sqlMessage,
        });
      }

      console.log("Rows Updated:", result.affectedRows);

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.json({
        success: true,
        message: "Product updated successfully",
      });
    }
  );
});

module.exports = router;