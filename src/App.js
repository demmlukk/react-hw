import React from 'react';
import ContactsList from './components/ContactList'

import './App.css'

const App = () => {
    return (
        <div>
            <h1>Список контактів</h1>
            <ContactsList />
        </div>
    );
};

export default App;