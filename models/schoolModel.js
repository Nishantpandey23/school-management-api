const db = require("../config/db");

exports.addSchool = (name, address, latitude, longitude, callback) => {
  const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(query, [name, address, latitude, longitude], callback);
};

exports.getAllSchools = (callback) => {
  const query = "SELECT * FROM schools";
  db.query(query, callback);
};
