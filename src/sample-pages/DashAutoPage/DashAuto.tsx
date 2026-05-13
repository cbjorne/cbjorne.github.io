import styles from './DashAuto.module.css';

const services = [
    { icon: '🔧', title: 'Engine Builds & Upgrades', desc: 'From bolt-on power adders to full stroker builds — we extract every last horsepower your engine has to offer.' },
    { icon: '🛞', title: 'Suspension & Handling', desc: 'Coilovers, sway bars, alignment, and corner balancing to keep your car planted on the street or track.' },
    { icon: '🔩', title: 'High-Performance Brakes', desc: 'Big brake kits, slotted rotors, performance pads, and stainless lines for the stopping power to match your speed.' },
    //{ icon: '🔍', title: 'ECU Tuning & Dyno', desc: 'In-house dyno tuning for naturally aspirated, forced induction, and E85 builds to maximize safe, reliable power.' },
    { icon: '💨', title: 'Forced Induction', desc: 'Turbo and supercharger installs, intercooler upgrades, and boost controller calibration done right.' },
    { icon: '⚙️', title: 'Drivetrain & Transmission', desc: 'Short-throw shifters, limited-slip differentials, performance clutch kits, and full gearbox rebuilds.' },
];

const DashAutoPage = () => {
    return (
        <div className={styles.page}>
            {/* ── Nav ── */}
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <span className={styles.logo}>
                        <span className={styles.logoAccent}>[Your</span> Logo]
                    </span>
                    <nav className={styles.nav}>
                        <a href="#services">Services</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <a href="#contact" className={styles.ctaBtn}>Book Now</a>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.heroEyebrow}>Performance shop · Est. 2021</p>
                    <h1 className={styles.heroTitle}>Built to Be<br />Faster Than Stock</h1>
                    <p className={styles.heroSub}>
                        Street builds, track builds, and everything in between — engineered with precision, tuned to perfection.
                    </p>
                    <div className={styles.heroBtns}>
                        <a href="#contact" className={styles.ctaBtn}>Book a Consultation</a>
                        <a href="#services" className={styles.outlineBtn}>What We Build</a>
                    </div>
                </div>
            </section>

            {/* ── Services ── */}
            <section id="services" className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>What We Build</h2>
                    <p className={styles.sectionSub}>Whether you're chasing lap times or just want more pull on the highway, we have the expertise to get you there.</p>
                    <div className={styles.servicesGrid}>
                        {services.map(s => (
                            <div key={s.title} className={styles.serviceCard}>
                                <span className={styles.serviceIcon}>{s.icon}</span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About ── */}
            <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
                <div className={styles.container}>
                    <div className={styles.aboutGrid}>
                        <div>
                            <h2 className={styles.sectionTitle}>About Dash Auto</h2>
                            <p>
                                Dash Auto was born on the track and built in the garage. Founded by Mason Erwin — a
                                lifelong gearhead and amateur racer — we set out to bring real performance knowledge
                                to everyday enthusiasts. Located in Stevens Point, WI, we've been turning street cars
                                into serious machines for over 5 years.
                            </p>
                            <br />
                            <p>
                                Every build gets the same treatment: a thorough consult, honest recommendations, and
                                meticulous execution. We don't upsell parts you don't need — we focus on what actually
                                moves the needle for your specific build and goals.
                            </p>
                            <div className={styles.stats}>
                                <div className={styles.stat}><strong>5+</strong><span>Years Building</span></div>
                                <div className={styles.stat}><strong>500+</strong><span>Builds Completed</span></div>
                            </div>
                        </div>
                        <div className={styles.aboutImagePlaceholder}>
                            <span>🏎️</span>
                            <p>Dash Auto Performance — Stevens Point, WI</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Contact ── */}
            <section id="contact" className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Start Your Build</h2>
                    <p className={styles.sectionSub}>Tell us what you're working with and what you're chasing — we'll put together a plan to get you there.</p>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span>📍</span>
                                <div>
                                    <strong>Address</strong>
                                    <p>[Your Address Here]</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <span>📞</span>
                                <div>
                                    <strong>Phone</strong>
                                    <p>(555) 555-5555</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <span>✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <p>service@dashauto.com</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <span>🕐</span>
                                <div>
                                    <strong>Hours</strong>
                                    <p>Mon-Sat: 8:00 AM – 5:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                        <form className={styles.contactForm} onSubmit={e => e.preventDefault()}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="tel" placeholder="Phone Number" />
                            <input type="email" placeholder="Email Address" required />
                            <textarea placeholder="Tell us about your build — year, make, model, mods already done, and what you're looking to achieve..." rows={4} />
                            <button type="submit" className={styles.ctaBtn}>Send It</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} Dash Auto · Stevens Point, WI · All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DashAutoPage;