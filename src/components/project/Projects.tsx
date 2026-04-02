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
                        <h3 className={styles.project__app_title}>Fitness Application</h3>
                        <p className={styles.project__app_date}>January 2025 - Present</p>
                    </div>
                    <p className={styles.project__app_description1}>A fullstack application using <strong>Go</strong> with a <strong>ReactTS</strong> frontend and <strong>Postgres</strong> database.
                    </p>
                    <p className={styles.project__app_description2}>The aim of this ongoing project is to create an application
                        to
                        allow users to track their workouts and view progression over time</p>
                    <p className={styles.project__app_stack}>Go - ReactTS - Postgres</p>
                    <a className={`${globalStyles.btn} ${styles.project__app_btn}`} href="https://github.com/cbjorne">Source Code Unavailable</a>
                </div>
                {/* Project 2 */}
                <div className={`${styles.project__app} ${styles.project__content2}`}>
                    <div className={styles.project__app_title_container}>
                        <h3 className={styles.project__app_title}>Project Manager</h3>
                        <p className={styles.project__app_date}>October 2023 - December 2023</p>
                    </div>
                    <p className={styles.project__app_description1}>A full stack project management web app, utilizing the <strong>MERN</strong> stack.
                        The application utilized RESTful API's with <strong>JWT authentication</strong> for all API
                        requests.
                    </p>
                    <p className={styles.project__app_description2}><strong>React</strong> frontend allowed for responsive web page
                        to
                        monitor projects,
                        tasks, and users.</p>
                    <p className={styles.project__app_stack}>ReactJS - NodeJS - MongoDB</p>
                    <a className={`${globalStyles.btn} ${styles.project__app_btn}`} href="https://github.com/cbjorne/TaskManager">Source Code</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;