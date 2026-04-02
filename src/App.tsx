import { useEffect, useState } from 'react';
import styles from './App.module.css';
import './modern-normalize.css';
import Header from './components/header/Header';
import MobileNav from './components/mobilenav/MobileNav';
import About from './components/about/About';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import { useDarkModeContext } from './contexts/DarkModeContext';
import Footer from './components/footer/Footer';

const App = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflowY = isMobileNavOpen ? 'hidden' : 'auto';
    }, [isMobileNavOpen]);

    const { toggleDarkMode } = useDarkModeContext();

    const toggleMobileNav = () => {
        setIsMobileNavOpen(prev => !prev);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };

    return (
        <div>
            <Header darkModeToggle={toggleDarkMode} toggleMobileNav={toggleMobileNav} />
            {/* Mobile navigation */}
            <div className={styles.mobilenav} style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
                <MobileNav closeMobileNav={closeMobileNav} darkModeToggle={toggleDarkMode} />
            </div>
            <main>
                <About />
                <br />
                <Projects />
                <br />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
