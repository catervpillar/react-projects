import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import DeleteIcon from '@mui/icons-material/Delete';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const deleteItemHandler = () => {
        props.onDeleteItem(props.id);
        console.log(props);
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">€{props.amount}</div>
                    <DeleteIcon className='delete-icon' title='Delete Expense' onClick={deleteItemHandler}></DeleteIcon>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;