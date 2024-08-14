const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "Javed",
  password: "Javed@432",
  database: "resume_generator",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database...");
});

app.use(bodyParser.json());
app.use(cors());

//app.response();
app.post("/submit", (req, res) => {
  const {
    id,
    name,
    email,
    phone,
    address,
    dob,
    marital,
    nationality,
    language,
  } = req.body;

  const sql ="INSERT INTO resume_table (id,name, email, phone,address,dob,marital,nationality,languages) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql,[null, name, email, phone, address, dob, marital, nationality, language],(err) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Internal Server Error");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("Personal information submitted successfully");
      }
    }
  );
});

app.get('/',(req,res)=>{
  res.send('<h1>Your server is working fine...<h1/>');
  
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});