import { useState } from 'react';

// Symulowane dane u¿ytkowników, w prawdziwej aplikacji bêdzie to zapytanie do bazy danych.  
const existingUsers = [
    { email: 'test@example.com', username: 'testuser' },
];

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    });

    const [statusMessage, setStatusMessage] = useState(''); // Nowy stan na komunikaty o statusie

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = { email: '', password: '', confirmPassword: '', username: '' };

        // Sprawdzenie unikalnoœci email
        if (existingUsers.some(user => user.email === formData.email)) {
            newErrors.email = 'Konto o takim adresie e-mail ju¿ istnieje.';
            isValid = false;
        }

        // Sprawdzenie unikalnoœci nazwy u¿ytkownika
        if (existingUsers.some(user => user.username === formData.username)) {
            newErrors.username = 'Nazwa u¿ytkownika jest ju¿ zajêta.';
            isValid = false;
        }

        // Sprawdzenie has³a (min 6 znaków, w tym jedna wielka litera)
        const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(formData.password)) {
            newErrors.password = 'Has³o musi mieæ co najmniej 6 znaków, w tym 1 du¿¹ literê.';
            isValid = false;
        }

        // Sprawdzenie potwierdzenia has³a
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Has³a nie s¹ zgodne.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sprawdzenie poprawnoœci formularza
        if (validateForm()) {
            console.log('Formularz wys³any', formData);

            // Symulacja udanej rejestracji
            setStatusMessage('Zarejestrowano pomyœlnie!'); // Ustawienie komunikatu sukcesu
            // W prawdziwej aplikacji tu bêdzie zapytanie do serwera o zapisanie danych
        } else {
            console.log('Formularz zawiera b³êdy.');
            setStatusMessage('Wyst¹pi³ problem z rejestracj¹.'); // Ustawienie komunikatu o b³êdzie
        }
    };

    return (
        <div>
            {statusMessage && <p>{statusMessage}</p>} {/* Wyœwietlanie komunikatu o statusie */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Has³o:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label>PotwierdŸ has³o:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <div>
                    <label>Nazwa u¿ytkownika:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <button type="submit">Zarejestruj</button>
            </form>
        </div>
    );
};



export default RegistrationForm;
