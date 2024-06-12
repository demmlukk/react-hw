import React from 'react';

import styles from './styles.module.css'
const ContactRow = ({ contact, onDelete }) => {
    const { id, name, phone } = contact;
    const [firstName, lastName] = name.split(' ');

    return (
        <tr className={styles.row}>
            <td>{firstName}</td>
            <td>{lastName || ''}</td>
            <td>{phone}</td>
            <td>
                <button className={styles.btn_delete} onClick={() => onDelete(id)}>Видалити</button>
            </td>
        </tr>
    );
};

export default ContactRow;
