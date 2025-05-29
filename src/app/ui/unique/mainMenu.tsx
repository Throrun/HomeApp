'use client';

import React from 'react';
import Navbar from '../reusable/navbar';
import Profile from './profile';
import Cards from './cards';
import styles from './mainMenu.module.css';

const MainMenu = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.sidebar}>
                    <Profile />
                </div>
                <div className={styles.content}>
                    <Cards />
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
