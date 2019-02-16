const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "김영관",
      birthday: "891207",
      gender: "남자",
      job: "대학생"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "김일관",
      birthday: "891207",
      gender: "남자",
      job: "대학생"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "김이관",
      birthday: "891207",
      gender: "남자",
      job: "대학생"
    }
  ]);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
