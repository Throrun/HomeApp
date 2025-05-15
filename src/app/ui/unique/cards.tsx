'use client';

import React, { useState } from 'react';
import Card from '../reusable/card';
import styles from './cards.module.css';

const Cards = () => {
    const [cards] = useState([
        { name: 'Rooms', span: 1 },
        { name: 'Shelfs', span: 1 },
        { name: 'Items', span: 2 },
        { name: 'Motto', span: 2 },
        { name: 'List of users', span: 2 },
    ]);

    return (
        <div className={styles.cardbox}>
            {cards.map((card, index) => (
                <Card name={card.name} key={index} span={card.span}/>
            ))}
        </div>
    )
}

export default Cards;