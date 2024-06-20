import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Photo from '../Photo';

import styles from './styles.module.css';

const PhotoList = () => {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, [albumId]);

    return (
        <div className={styles.photoList}>
            <h2>Фото альбому</h2>
            {photos.map(photo => (
                <Photo key={photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default PhotoList;
