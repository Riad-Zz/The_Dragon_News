import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className="left-side"></section>
                <section className="main-content">
                    <Outlet></Outlet>
                </section>
                <section className="right-side"></section>
            </main>
        </div>
    );
};

export default Home;