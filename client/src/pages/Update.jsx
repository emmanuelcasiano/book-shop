import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import {  } from "react-router-dom";

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        description: "",
        price: null,
        cover: "",
    });

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname.split("/")[2]);

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // console.log(book);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8800/book/" + bookId, book);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="form">
            <h1>Update the Book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title" />
            <input type="text" placeholder="description" onChange={handleChange} name="description" />
            <input type="number" placeholder="price" onChange={handleChange} name="price" />
            <input type="text" placeholder="cover" onChange={handleChange} name="cover" />

            <button className="formButton" onClick={handleClick}>
                Update
            </button>
        </div>
    );
};

export default Update;
