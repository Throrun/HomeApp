'use client';

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./card.module.css";
import List from "./list";

interface CardProps {
  name: string;
  columnSpan: number;
  rowSpan: number;
  route?: string;
  content: CardContent;
}

export enum CardContent {
  list,
  avatar,
  motto,
  description
}

const Card = ({ name, columnSpan, rowSpan, route, content }: CardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <div
      className={`${styles.card} ${styles[`cspan-${columnSpan}`]} ${styles[`rspan-${rowSpan}`]}`}
      onClick={handleClick}
      style={{ cursor: route ? "pointer" : "default" }}
    >
      <h3>{name}</h3>
      {content===CardContent.list && <List name={name.toLowerCase()} />}
      {content===CardContent.avatar} {/* tutaj komponent avataru */}
      {content===CardContent.motto && <h4>"Success is the sum of small efforts, repeated day in and day out."</h4>}
      {content===CardContent.description&& <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore autem quasi, quos esse, venia
        m non molestias maiores deleniti saepe corrupti architecto repudiandae ad reprehenderit consectetur. Nulla nemo ipsa vel?</h4>}
    </div>
  );
};

export default Card;
