import React from "react";

import './TextButton.css';

const TextButton = (props) => {
    return <button type={props.type} className="text-button" onClick={props.onClick}>{props.text}</button>
};

export default TextButton;