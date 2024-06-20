import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Список користувачів</h1>
            {users.map(user => (
                <div key={user.id} className={styles.user}>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <Link to={`/user/${user.id}/albums`}>Показати альбоми</Link>
                </div>
            ))}
        </div>
    );
};

export default UserList;
