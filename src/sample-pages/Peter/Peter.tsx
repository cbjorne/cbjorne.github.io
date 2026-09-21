import styles from './Peter.module.css';

const services = [
    {
        title: 'Stump Grinding',
        description: 'Fast, low-impact grinding that removes visible stumps and restores a clean yard surface.',
    },
    {
        title: 'Root Flare Cleanup',
        description: 'Targeted root and surface flare removal around walkways, patios, and landscaping edges.',
    },
    {
        title: 'Storm Damage Response',
        description: 'Same-week help after storms for hazardous stumps and debris left behind from fallen trees.',
    },
    {
        title: 'Lot Clearing Support',
        description: 'Reliable stump removal support for landscapers, builders, and property management teams.',
    },
];

const processSteps = [
    {
        title: '1. Free On-Site Estimate',
        description: 'Peter walks the property, measures each stump, and gives a clear upfront quote.',
    },
    {
        title: '2. Safe Precision Grinding',
        description: 'Stumps are ground below grade with careful protection for nearby lawn and hardscape.',
    },
    {
        title: '3. Clean Finish',
        description: 'Wood chips are left for mulch or hauled away, and your space is prepped for seed or sod.',
    },
];

const PeterPage = () => {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <p className={styles.brand}>Peter's Stump Removal</p>
                    <a href="#quote" className={styles.headerCta}>Get Free Quote</a>
                </div>
            </header>

            <main>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <p className={styles.eyebrow}>Locally Owned • Fast Turnaround</p>
                        <h1 className={styles.title}>Stumps Gone.<br />Yard Ready.</h1>
                        <p className={styles.subtitle}>
                            Peter helps homeowners reclaim their outdoor space with clean,
                            professional stump removal and honest pricing.
                        </p>
                        <div className={styles.heroActions}>
                            <a className={styles.primaryBtn} href="#quote">Request a Quote</a>
                            <a className={styles.secondaryBtn} href="tel:+15555551212">Call (555) 555-1212</a>
                        </div>
                    </div>
                    <div className={styles.heroBadgeCard}>
                        <h2>Why Homeowners Choose Peter</h2>
                        <ul>
                            <li>No hidden fees</li>
                            <li>Respectful cleanup every job</li>
                            <li>Residential and commercial service</li>
                            <li>Weekend appointments available</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.trustStrip}>
                    <p>Serving local neighborhoods with responsive scheduling and dependable workmanship.</p>
                </section>

                <section className={styles.section}>
                    <div className={styles.sectionHead}>
                        <p className={styles.sectionKicker}>Services</p>
                        <h2>Complete Stump Removal Solutions</h2>
                    </div>
                    <div className={styles.grid}>
                        {services.map((service) => (
                            <article key={service.title} className={styles.card}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className={`${styles.section} ${styles.processSection}`}>
                    <div className={styles.sectionHead}>
                        <p className={styles.sectionKicker}>How It Works</p>
                        <h2>Simple Process, Professional Results</h2>
                    </div>
                    <div className={styles.processGrid}>
                        {processSteps.map((step) => (
                            <article key={step.title} className={styles.processCard}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="quote" className={`${styles.section} ${styles.ctaSection}`}>
                    <div className={styles.ctaContent}>
                        <p className={styles.sectionKicker}>Free Quote</p>
                        <h2>Ready To Clear That Stump?</h2>
                        <p>
                            Tell Peter where the stump is located and how many need removal.
                            You will receive a fast, no-pressure estimate.
                        </p>
                        <div className={styles.contactRow}>
                            <a className={styles.primaryBtn} href="mailto:peter@example.com">Email Peter</a>
                            <a className={styles.secondaryBtn} href="tel:+15555551212">Call (555) 555-1212</a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>Peter's Stump Removal</p>
            </footer>
        </div>
    );
};

export default PeterPage;
