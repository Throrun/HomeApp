'use client';

import React, { useState } from 'react';
import Card from '../reusable/card';
import styles from './profile.module.css';

const Profile = () => {
    const [profile] = useState([
        { name: '', cspan: 1, rspan: 1 },
        { name: 'Description', cspan: 1, rspan: 2}
    ]);

    return (
        <div className={styles.profileBox}>
            {profile.map((card, index) => (
                <Card name={card.name} key={index} columnSpan={card.cspan} rowSpan={card.rspan}/>
            ))}
        </div>
    )
}

export default Profile;