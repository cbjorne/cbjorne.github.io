import styles from './Projects.module.css';
import globalStyles from '../../global.module.css';

const Projects = () => {
    return (
        <section className={`${styles.project} ${globalStyles.container} ${globalStyles.section}`} id="projects">
            <h2 className={styles.project__title}>Projects</h2>
            <hr className={styles.project__hr} />
            <div className={styles.project__container}>
                {/* Project 1 */}
                <div className={`${styles.project__app} ${styles.project__content1}`}>
                    <div className={styles.project__app_title_container}>
                        <h3 className={styles.project__app_title}>Fitness Tracker</h3>
                        <p className={styles.project__app_date}>January 2026 - Present</p>
                    </div>
                    <p className={styles.project__app_description1}>Architected a fitness application with a <strong>Go/Gin</strong> backend, <strong>React/TypeScript</strong> frontend, and <strong>PostgreSQL</strong> database, following a clean architecture with handler/service separation and DI container pattern.</p>
                    <p className={styles.project__app_description2}>Implemented authentication via <strong>Clerk</strong> with JWT middleware and Svix-verified webhooks for user provisioning; integrated <strong>Stripe</strong> for subscription billing. Containerized with <strong>Docker</strong> and deployed to <strong>Google Cloud Run</strong> via GitHub Actions CI/CD, using Google Artifact Registry and Cloud SQL.</p>
                    <p className={styles.project__app_stack}>Go - React - Postgres - Docker - Clerk - Stripe - GCP</p>
                    <a className={`${globalStyles.btn} ${styles.project__app_btn}`} href="https://github.com/cbjorne">Source Code Unavailable</a>
                </div>
                {/* Project 2 */}
                <div className={`${styles.project__app} ${styles.project__content2}`}>
                    <div className={styles.project__app_title_container}>
                        <h3 className={styles.project__app_title}>Photo Share App (In Progress)</h3>
                        <p className={styles.project__app_date}>May 2026 - Present</p>
                    </div>
                    <p className={styles.project__app_description1}>Developing a photo share platform with a <strong>Rust</strong> backend and <strong>React</strong> frontend focused on user experience, performance, and lightweight architecture.</p>
                    <p className={styles.project__app_description2}>Designing RESTful APIs, image upload workflows, and a client-side gallery using <strong>SQLite</strong> for local data persistence, with <strong>Stripe</strong> integration and deployment to <strong>GCP</strong> using <strong>Docker</strong> and Google Cloud Storage.</p>
                    <p className={styles.project__app_stack}>Rust - React - SQLite - Docker - Stripe - GCP - GCS</p>
                    <a className={`${globalStyles.btn} ${styles.project__app_btn}`} href="https://github.com/cbjorne">Source Code Unavailable</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;