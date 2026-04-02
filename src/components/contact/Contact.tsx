import styles from './Contact.module.css';
import globalStyles from '../../global.module.css';

const Contact = () => {
    return (
        <section id="contact" className={`${styles.contact} ${globalStyles.container} ${globalStyles.section}`}>
            <h2 className={styles.contact__title}>Get In Contact</h2>
            <p className={styles.contact__description}>
                Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always
                open so feel free to reach out and I will get back to you as soon as possible.
            </p>
            <a className={`${styles.contact__btn} ${globalStyles.btn}`} href="mailto:bjornecolin@gmail.com" target="_blank">Reach out</a>
        </section>
    );
};

export default Contact;