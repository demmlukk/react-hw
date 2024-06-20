import React from 'react';
import styles from './styles.module.css';

const Photo = ({ photo }) => {
    return (
        <div className={styles.photo}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
        </div>
    );
};

export default Photo;
