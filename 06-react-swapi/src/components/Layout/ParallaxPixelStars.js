import React from "react";
import ReactDOM from "react-dom";

import styles from './ParallaxPixelStars.module.css';

const StarsBackground = () => {
    return <div className={styles["stars-container"]}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
    </div>;
};

const portalElement = document.getElementById('stars-background');

const ParallaxPixelStars = () => {
    return <>
        {ReactDOM.createPortal(<StarsBackground />, portalElement)}
    </>;
};

export default ParallaxPixelStars;