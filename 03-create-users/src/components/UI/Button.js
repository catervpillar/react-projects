import React from "react";

import styles from './Button.module.css';

const Button = (props) => {
    return <button
        className={`${styles.button} ${props.fill === 'outline' ? styles.outline : styles.solid}`}
        type={props.type || 'button'}
        onClick={props.onClick}
    >
        {props.children}
    </button>
};

export default Button;