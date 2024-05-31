import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css'; // Додав імпорт стилів

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const res = await axios.post('http://localhost:3000/api/users/register', { email, password });
            console.log('Registration response:', res.data);
            navigate('/login');
        } catch (err) {
            console.error('Error during registration:', err);
            setError(err.response?.data.message || 'Error registering user');
        }
    };

    return (
        <div className="register-container"> {/* Додав клас зі стилів */}
            <h2>Реєстрація</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleRegister}>
                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введіть ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />
                <label htmlFor="password">Пароль:</label><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Введіть ваш пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />
                <label htmlFor="confirm_password">Підтвердіть пароль:</label><br />
                <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Підтвердіть ваш пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                /><br /><br />
                <button type="submit" className="reserve-button">Зареєструватися</button> {/* Застосовано стиль */}
            </form>
            <span className="login-text">Вже маєте аккаунт? <Link to="/login" className="login-link">Увійти</Link></span>
        </div>
    );
};

export default RegisterForm;
