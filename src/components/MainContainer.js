import React, { useState } from "react";

function MainContainer() {
    const [todoItems, setTodoItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const toggleCompleted = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].completed = !newTodoItems[index].completed;
        setTodoItems(newTodoItems);
    };

    const addTodoItem = (event) => {
        event.preventDefault();
        const trimmedValue = inputValue.trim();
        if (trimmedValue === '') return;
        const newTodoItem = { text: trimmedValue, completed: false };
        setTodoItems([...todoItems, newTodoItem]);
        setInputValue('');
    };

    return (
        <div className='container'>
            <h1>ToDo List</h1>
            <ul id="todo-list">
                {todoItems.map((todo, index) => (
                    <li
                        key={index}
                        className={todo.completed ? 'completed' : ''}
                        onClick={() => toggleCompleted(index)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <form id="todo-form" onSubmit={addTodoItem}>
                <input
                    type="text"
                    id="todo-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className='sub-btn' type="submit">ADD</button>
            </form>
        </div>
    );
}

export default MainContainer;
