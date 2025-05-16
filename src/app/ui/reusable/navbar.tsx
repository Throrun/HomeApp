import React from 'react';
import HomeLogo from './homeLogo';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <HomeLogo />
            <input type="text" placeholder="Search..." className={styles.searchbar}/>
            <h5>Logged as Guest</h5>
        </nav>
    );
};

export default Navbar;
