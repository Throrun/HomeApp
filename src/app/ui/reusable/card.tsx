import React from 'react';
import styles from './card.module.css'

const Card = ({ name, columnSpan, rowSpan }: { name: string, columnSpan: number, rowSpan: number }) => {
    return (
        <div className={`${styles.card} ${styles[`cspan-${columnSpan}`]} ${styles[`rspan-${rowSpan}`]}`}>
            <h3>{name}</h3>
            <div>
                {/* tutaj małe listy */}
            </div>
        </div>
    );
}

export default Card;