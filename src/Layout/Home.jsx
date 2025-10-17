import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <header>
                {/* Top Header  */}
                <Header></Header>
                {/* Latest News Section  */}
                <section>
                    <LatestNews></LatestNews>
                </section>
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