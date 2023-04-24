import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreateProduct from "../Pages/Create Product/CreateProduct"
import LandingPage from '../Pages/Landing Page/LandingPage';
import LoadingComponent from '../components/LoadingComponent'
import Login from '../Pages/login/Login';

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
                        <Route path='/' element={<Login />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path='/home' element={<LandingPage />} />
                        <Route path='/create-product' element={<CreateProduct />} />
                    </Routes>
                )}
            </Suspense>
        </div>
    );
}

export default RouteManagement;
