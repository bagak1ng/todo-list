import React, { useState } from 'react';
import { Button } from 'bootstrap';

const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('');
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }
    return (
        <form className='create-todo' onSubmit={handleSubmit}>
            <input className='userInput' value={userInput} onChange={handleChange} type='text' placeholder='Enter task...' />
            <button className='submit' type='submit'>Submit</button>
        </form>
    );
}

export default ToDoForm;