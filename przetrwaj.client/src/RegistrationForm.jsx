import { useState } from 'react';

// Symulowane dane u�ytkownik�w, w prawdziwej aplikacji b�dzie to zapytanie do bazy danych.  
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

        // Sprawdzenie unikalno�ci email
        if (existingUsers.some(user => user.email === formData.email)) {
            newErrors.email = 'Konto o takim adresie e-mail ju� istnieje.';
            isValid = false;
        }

        // Sprawdzenie unikalno�ci nazwy u�ytkownika
        if (existingUsers.some(user => user.username === formData.username)) {
            newErrors.username = 'Nazwa u�ytkownika jest ju� zaj�ta.';
            isValid = false;
        }

        // Sprawdzenie has�a (min 6 znak�w, w tym jedna wielka litera)
        const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(formData.password)) {
            newErrors.password = 'Has�o musi mie� co najmniej 6 znak�w, w tym 1 du�� liter�.';
            isValid = false;
        }

        // Sprawdzenie potwierdzenia has�a
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Has�a nie s� zgodne.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sprawdzenie poprawno�ci formularza
        if (validateForm()) {
            console.log('Formularz wys�any', formData);

            // Symulacja udanej rejestracji
            setStatusMessage('Zarejestrowano pomy�lnie!'); // Ustawienie komunikatu sukcesu
            // W prawdziwej aplikacji tu b�dzie zapytanie do serwera o zapisanie danych
        } else {
            console.log('Formularz zawiera b��dy.');
            setStatusMessage('Wyst�pi� problem z rejestracj�.'); // Ustawienie komunikatu o b��dzie
        }
    };

    return (
        <div>
            {statusMessage && <p>{statusMessage}</p>} {/* Wy�wietlanie komunikatu o statusie */}
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
                    <label>Has�o:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label>Potwierd� has�o:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <div>
                    <label>Nazwa u�ytkownika:</label>
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
