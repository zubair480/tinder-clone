import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([
    // {
    //   name: "Elon Musk",
    //   url: "https://cdn.pixabay.com/photo/2022/01/19/09/26/elon-musk-6949267_960_720.png",
    // },
    // {
    //   name: "Jeff Bezos",
    //   url: "https://cdn.pixabay.com/photo/2022/04/29/11/18/jeff-halevy-7163455_1280.jpg",
    // },
    // {
    //   name: "Tylor Swift",
    //   url: "https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg",
    // },
  ]);
  async function fetchData() {
    const req = await axios.get("/tinder/cards");
    setPeople(req.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(people);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
