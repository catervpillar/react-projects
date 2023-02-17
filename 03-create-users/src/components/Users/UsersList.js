import React from "react";
import Card from "../UI/Card";

import styles from './UsersList.module.css';

const UsersList = (props) => {

    let content = <p className={styles['no-content']}>No users found. Maybe add some!</p>;

    if (props.users.length > 0) {
        content = (
            <Card className={styles.users}>
                <ul>
                    <h2>Users list</h2>
                    {props.users.map(user => (
                        <li key={user.id}>
                            {user.username} ({user.age} years old)
                        </li>
                    ))}
                </ul>
            </Card>
        );
    };

    return (
        content
    );
};

export default UsersList;