import styles from './Footer.module.css';
import globalStyles from '../../global.module.css';

const Footer = () => {
    return (
        <footer className={`${globalStyles.container} ${globalStyles.section}`}>
            <h3 className={styles.footer__title}>~ Colin Bjorne ~</h3>
        </footer>
    );
};

export default Footer;