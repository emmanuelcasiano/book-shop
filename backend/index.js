// import express from "express";
// import mysql from "mysql2";
const express = require("express");
const mysql = require("mysql2");

const app = express();

app.listen(8800, () => {
    console.log("Connected to backend ^_^");
});
