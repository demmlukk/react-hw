import React, { useState } from 'react';
import PhotoList from '../PhotoList';
import styles from './styles.module.css';

const Album = ({ album }) => {
    const [showPhotos, setShowPhotos] = useState(false);

    return (
        <div className={styles.album}>
            <h4>{album.title}</h4>
                <button onClick={() => setShowPhotos(!showPhotos)}>
                    {showPhotos ? 'Сховати фото' : 'Показати фото'}
                </button>
            {showPhotos && <PhotoList albumId={album.id} />}
        </div>
    );
};

export default Album;
