// src/App.jsx
import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './MainPage';
import RegisterPage from './RegisterPage';
import './index.css'; // Upewnij siê, ¿e masz tu poprawny CSS

const App = () => {
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        const hash = window.location.hash || '#home';
        if (hash === '#register') {
            setCurrentPage('register');
        } else {
            setCurrentPage('home');
        }

        const handleHashChange = () => {
            const newHash = window.location.hash;
            if (newHash === '#register') {
                setCurrentPage('register');
            } else {
                setCurrentPage('home');
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="app-container">
            <header className="header">
                <h1>Global Disaster Alert and Coordination System</h1>
                <nav className="nav">
                    <button onClick={() => (window.location.hash = '#home')} className="btn btn-primary">
                        Strona g³ówna
                    </button>
                    <button onClick={() => (window.location.hash = '#register')} className="btn btn-primary">
                        Rejestracja / Logowanie
                    </button>
                </nav>
            </header>

            <section className="content">
                {currentPage === 'home' && <MainPage />}
                {currentPage === 'register' && <RegisterPage />}
            </section>

            <footer className="footer">
                <p>&copy; 2025 GDACS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
