import React from 'react';
import styles from './homeLogo.module.css'
import Image from 'next/image';

const HomeLogo = () => {
    return (
        <div className={styles.logoWrapper}>
            <Image src="/Logo.svg" width={50} height={50} alt='Home App logo' />
            <h1>Home App</h1>
        </div>
    )

}

export default HomeLogo