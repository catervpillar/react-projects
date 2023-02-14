import React from "react";

import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    const deleteItemHandler = (id) => {
        props.onDeleteExpense(id);
    };

    return <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                onDeleteItem={deleteItemHandler} />
        ))}
    </ul>
};

export default ExpensesList;