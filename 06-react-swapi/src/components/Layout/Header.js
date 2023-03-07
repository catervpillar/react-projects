import React from 'react';

import styles from './Header.module.css';

// import logo1 from '../../assets/star-wars.svg';
// import logo2 from '../../assets/star-wars-2.svg';
import logo3 from '../../assets/star-wars-4.svg';

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.logo}>
            <img src={logo3} alt='Star Wars logo' />
        </div>
    </header>;
};

export default Header;