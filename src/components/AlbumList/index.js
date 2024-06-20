import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './styles.module.css';

const AlbumList = () => {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data));
    }, [userId]);

    return (
        <div>
            <h2>Альбоми користувача</h2>
            {albums.map(album => (
                <div key={album.id} className={styles.album}>
                    <h4>{album.title}</h4>
                    <Link to={`/album/${album.id}/photos`}>Показати фото</Link>
                </div>
            ))}
        </div>
    );
};

export default AlbumList;
