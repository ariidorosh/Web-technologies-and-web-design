import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Sending registration request with data:', { email, password, role });
        try {
            const res = await axios.post('http://localhost:3000/api/users/register', { email, password, role });
            console.log('Registration response:', res.data);
            navigate('/login');
        } catch (err) {
            console.error('Error during registration:', err);
            setError(err.response?.data.message || 'Error registering user');
        }
    };

    return (
        <div>
            <h2>Реєстрація</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleRegister}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Пароль:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Роль:
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                </label>
                <button type="submit">Зареєструватися</button>
            </form>
        </div>
    );
};

export default Register;
