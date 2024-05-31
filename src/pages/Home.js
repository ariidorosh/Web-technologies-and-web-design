import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';
import ReservationList from '../components/ReservationList';

const Home = () => (
    <div className="reservation-container">
        <Header />
        <section>
            <h2>Форма резервування</h2>
            <ReservationForm />
        </section>
        <section>
            <h2>Мої резервування</h2>
            <ReservationList />
        </section>
        <Footer />
    </div>
);

export default Home;
