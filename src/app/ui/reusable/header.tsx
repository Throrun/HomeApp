import React from 'react';
import styles from './header.module.css'
import HomeLogo from './homeLogo';

const Header = ({ variant = "main" }: { variant?: "main" | "login" }) => {
    const isLoginPage = variant === "login"

    return (
        <header>
            {isLoginPage ? (
                <div className={styles.headerWrapper}>
                    <HomeLogo />
                </div>
            ) : (
                <div>
                    <HomeLogo />
                </div>
            )}

        </header>
    )
}

export default Header