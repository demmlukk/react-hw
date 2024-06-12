import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm';
import ContactRow from '../ContactRow';

import styles from './styles.module.css'

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setContacts(data);
            })
            .catch(error => {
                console.error("There was an error fetching the contacts!", error);
            });
    }, []);

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
        setShowForm(false);
    };

    return (
        <div className={styles.wrapper}>
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <ContactRow key={contact.id} contact={contact} onDelete={deleteContact} />
                ))}
                </tbody>
            </table>
            <button  className={styles.btn} onClick={() => setShowForm(true)}>Додати новий контакт</button>
            {showForm && <ContactForm onSave={addContact} onCancel={() => setShowForm(false)} />}
        </div>
    );
};

export default ContactList;
