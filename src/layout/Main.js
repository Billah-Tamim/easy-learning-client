import React, { useContext } from 'react';
import Header from '../pages/share/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/footer/Footer';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Main = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {
                user?.emailVerified && <Footer></Footer>
            }
        </div>
    );
};

export default Main;