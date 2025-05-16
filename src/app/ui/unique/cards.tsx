'use client';

import React, { useState } from 'react';
import Card from '../reusable/card';
import styles from './cards.module.css';

const Cards = () => {
    const [cards] = useState([
        { name: 'Rooms', cspan: 1, rspan: 1},
        { name: 'Shelfs', cspan: 1, rspan: 1},
        { name: 'Items', cspan: 2, rspan: 1},
        { name: 'Motto', cspan: 2, rspan: 1 },
        { name: 'List of users', cspan: 2, rspan: 1 },
    ]);

    return (
        <div className={styles.cardbox}>
            {cards.map((card, index) => (
                <Card name={card.name} key={index} columnSpan={card.cspan} rowSpan={card.rspan}/>
            ))}
        </div>
    )
}

export default Cards;