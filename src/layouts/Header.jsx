import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Header({ setActivePage, activePage }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme') || 'dark';
        return saved && saved !== 'undefined' ? saved : 'dark';
    });

    const [isopen, setIsOpen] = useState(false);

    const handleSwitchTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        console.log(`Switching to ${theme} theme`);
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <header>
            <nav>
                <h1>My Portfolio</h1>

                <button id="mobile-menu" onClick={() => setIsOpen(!isopen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <ul className={isopen ? 'nav-links open' : 'nav-links'}>
                    <li><button onClick={() => setActivePage('home')} className={activePage === "home" ? "active" : ""} >Home</button></li>
                    <li><button onClick={() => setActivePage('about')} className={activePage === "about" ? "active" : ""} >About</button></li>
                    <li><button onClick={() => setActivePage('projects')} className={activePage === "projects" ? "active" : ""} >Projects</button></li>
                    <li><button onClick={() => setActivePage('contact')} className={activePage === "contact" ? "active" : ""} >Contact</button></li>
                </ul>
            </nav>
            <button id="theme-toggle" onClick={handleSwitchTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
        </header>
    );
}

export default Header;