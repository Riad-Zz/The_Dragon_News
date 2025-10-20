import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navabr/Navbar';
import LeftAside from './Asides/LeftAside';
import RightAside from './Asides/RightAside';
import { HashLoader } from 'react-spinners';
import Loader from '../Components/Loader/Loader';

const Home = () => {
    const {state} = useNavigation() ;
    return (
        <div>
            
            <header>
                {/* Top Header  */}
                <Header></Header>
                {/* Latest News Section  */}
                <section>
                    <LatestNews></LatestNews>
                </section>
                {/* Navbar section  */}
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 mt-7 gap-5'>
                <aside className=' md:col-span-3 md:sticky md:top-7 md:h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main-content md:col-span-6">
                    {state =='loading' ? <Loader></Loader> : <Outlet></Outlet>}
                    
                </section>
                <aside className='md:col-span-3 md:sticky md:top-7 md:min-h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;