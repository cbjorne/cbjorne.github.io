import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <span className={styles.code}>404</span>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.message}>
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <button className={styles.homeBtn} onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;