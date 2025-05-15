import React from 'react';
import styles from './card.module.css'

const Card = ({ name, span }: { name: string, span: number }) => {
    return (
        <div className={`${styles.card} ${styles[`span-${span}`]}`}>
            <h3>{name}</h3>
            <div>
                {/* tutaj małe listy */}
            </div>
        </div>
    );
}

export default Card;