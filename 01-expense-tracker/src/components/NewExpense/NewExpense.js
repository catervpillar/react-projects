import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import TextButton from '../Buttons/TextButton';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <div className="new-expense">
        {!isEditing && <TextButton text='Add New Expense' onClick={startEditingHandler} />}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div >
};

export default NewExpense;