import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
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
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
