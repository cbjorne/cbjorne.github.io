import styles from './Header.module.css';
import globalStyles from '../../global.module.css';

type Props = {
    darkModeToggle: () => void;
    toggleMobileNav: () => void;
};

const Header = ({ darkModeToggle, toggleMobileNav }: Props) => {
    return (
        <header className={`${styles.header} ${globalStyles.container}`}>
            <h1 className={styles.header__name}>Colin Bjorne</h1>
            <nav>
                <ul className={styles.header__menu}>
                    <li>
                        <a className={styles.header__link} href="#about">About</a>
                    </li>
                    <li>
                        <a className={styles.header__link} href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className={styles.header__link} href="#contact">Contact</a>
                    </li>
                    <li className={styles.header__line}></li>
                    <li>
                        <button id="theme-toggle" onClick={darkModeToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className={styles.header__sun}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>

                        </button>
                    </li>
                </ul>
                <button className={styles.header__bars} onClick={toggleMobileNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </nav>
        </header>
    );
};

export default Header;