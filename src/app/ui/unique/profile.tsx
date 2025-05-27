'use client';

import React, { useState } from 'react';
import Card, {CardContent} from '../reusable/card';
import styles from './profile.module.css';

const Profile = () => {
    const [profile] = useState([
        { name: '', cspan: 1, rspan: 1, content: CardContent.avatar},
        { name: 'Description', cspan: 1, rspan: 2, content: CardContent.description}
    ]);

    return (
        <div className={styles.profileBox}>
            {profile.map((card, index) => (
                <Card name={card.name} key={index} columnSpan={card.cspan} rowSpan={card.rspan} content={card.content}/>
            ))}
        </div>
    )
}

export default Profile;