import React, { useState } from 'react';

import styles from './styles.module.css'

const ContactForm = ({ onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit  = (e) => {
        e.preventDefault();
        const newContact = {
            id: Date.now(),
            name: `${name} ${surname}`,
            phone,
        };
        onSave(newContact);
    };

    return (
        <div className={styles.contact}>
            <h2>Додати новий контакт</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.user}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label>Ім'я</label>
                </div>
                <div className={styles.user}>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <label>Прізвище</label>
                </div>
                <div className={styles.user}>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <label>Телефон</label>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn} type="submit">Зберегти</button>
                    <button className={styles.btn_cancel} type="button" onClick={onCancel}>Скасувати</button>
                </div>
            </form>
        </div>

    );
};

export default ContactForm;
