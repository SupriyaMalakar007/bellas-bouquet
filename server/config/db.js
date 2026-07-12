const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Malakar@123",
  database: "bellas_bouquet",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }

  console.log("✅ Connected to MySQL Database");
});

module.exports = db;