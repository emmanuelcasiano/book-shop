// import express from "express";
// import mysql from "mysql2";
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ECDev2024",
    database: "book_shop",
    port: 3308,
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES (?)";
    const values = [req.body.title, req.body.description, req.body.price, req.body.cover];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been created successfully");
    });
});

app.delete("/book/:id", (req, res) => {
    const bookId = req.params.id;

    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, bookId, (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully");
    });
});

app.put("/book/:id", (req, res) => {
    const bookId = req.params.id;

    const q = "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? WHERE id = ?";

    const values = [req.body.title, req.body.description, req.body.price, req.body.cover];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been updated successfully");
    });
});

app.listen(8800, () => {
    console.log("Connected to backend ^_^");
});
