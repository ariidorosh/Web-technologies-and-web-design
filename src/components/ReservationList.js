import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.get('/reservations')
            .then(response => {
                setReservations(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <ul className="reservation-list">
            {reservations.map(reservation => (
                <li key={reservation.id}>
                    <span>Аудиторія {reservation.auditorium}, {reservation.date}, {reservation.startTime}</span>
                    <div className="reservation-actions">
                        <a href={`edit_reservation.html?id=${reservation.id}`}>Редагувати</a>
                        <a href={`cancel_reservation.html?id=${reservation.id}`}>Скасувати</a>
                        <a href={`delete_reservation.html?id=${reservation.id}`}>Видалити</a>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ReservationList;
