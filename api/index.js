console.log("hello")

const express = require("express");
const cors = require("cors");
const app  = express();

app.use(cors());

const users = require("./data/users")

const port = 4000;

app.get("/", (req, res) => {

    const { q } = req.query;

    const keys = ["first_name", "last_name", "email"];

    const filteredSeacrh = (data) => {
        return data.filter((item) => 
        keys.some((key) => item[key].toLowerCase().includes(q))
        )
    }

    res.json(filteredSeacrh(users).slice(0, 10))
})

app.listen(port, () => {
    console.log(`Server is listening at port:${port}`)
})