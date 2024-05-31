import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
    const [auditorium, setAuditorium] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(1); // Значення за замовчуванням - 1 година

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/reservations', { auditorium, date, duration })
            .then(response => {
                console.log(response.data);
                // Handle success (e.g., show a success message)
            })
            .catch(error => {
                console.error(error);
                // Handle error (e.g., show an error message)
            });
    };

    // Припустимо, що у вас є значення користувача, але ви його передаєте через пропси
    const user = { role: 'user' };

    if (!user || user.role !== 'user') {
        return <div>У вас немає доступу до цієї форми.</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="auditorium">Аудиторія:</label><br />
            <select id="auditorium" name="auditorium" value={auditorium} onChange={(e) => setAuditorium(e.target.value)}>
                <option value="">Оберіть аудиторію</option>
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="103">103</option>
            </select><br />
            <label htmlFor="date">Дата:</label><br />
            <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} /><br /><br />
            <label htmlFor="duration">Час резервування:</label><br />
            <select id="duration" name="duration" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))}>
                <option value={1}>1 година</option>
                <option value={2}>2 години</option>
                <option value={5}>5 годин</option>
                <option value={24}>1 день</option>
                <option value={48}>2 дні</option>
            </select><br /><br />
            <input type="submit" value="Резервувати" />
        </form>
    );
};

export default ReservationForm;
