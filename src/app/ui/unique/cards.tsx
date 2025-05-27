"use client";

import React, { useState } from "react";
import Card, {CardContent} from "../reusable/card";
import styles from "./cards.module.css";

const Cards = () => {
  const [cards] = useState([
    { name: "Rooms", cspan: 1, rspan: 1, route: "/rooms", content: CardContent.list},
    { name: "Shelfs", cspan: 1, rspan: 1, route: "/shelfs", content: CardContent.list},
    { name: "Items", cspan: 2, rspan: 1, route: "/items", content: CardContent.list},
    { name: "Motto", cspan: 2, rspan: 1 , content: CardContent.motto},
    { name: "Profiles", cspan: 2, rspan: 1, content: CardContent.list},
  ]);

  return (
    <div className={styles.cardbox}>
      {cards.map((card, index) => (
        <Card
          name={card.name}
          key={index}
          columnSpan={card.cspan}
          rowSpan={card.rspan}
          route={card.route}
          content={card.content}
        />
      ))}
    </div>
  );
};

export default Cards;
