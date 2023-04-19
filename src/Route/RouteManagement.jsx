import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoadingComponent from '../component/Loading component/LoadingComponent';
import LoginPage from '../Pages/login page/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';
import AboutMe from '../Pages/AboutMe/AboutMe';
import FormCRUD from '../Pages/crud/FormCRUD';
import LayoutComponent from '../component/layout/layoutComponent';

const RouteManagement = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token]);

    return (
        <div>
            <Suspense fallback={<LoadingComponent />}>
                {!token ? (
                    <Routes>
                        <Route path='/' element={<LoginPage />} />
                    </Routes>
                ) : (
                    <LayoutComponent>
                        <Routes>
                            <Route path='/home' element={<HomePage />} />
                            <Route path='/about-me' element={<AboutMe />} />
                            <Route path='/about-me/:id' element={<AboutMe />} />
                            <Route path='/form' element={<FormCRUD />} />
                        </Routes>
                    </LayoutComponent>
                )}
            </Suspense>
        </div>
    );
}

export default RouteManagement;
