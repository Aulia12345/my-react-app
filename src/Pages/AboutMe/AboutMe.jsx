import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUsers } from './hooks/useUsersData';
import { useEffect } from 'react';
import LoadingComponent from '../../component/Loading component/LoadingComponent';
import './AboutMe.css'

const AboutMe = () => {
    const { id } = useParams();

    // Get user data
    const [isLoadingUsersData, usersData, getUsersData] = useGetUsers()
    console.log({ usersData });

    // Activate Custom Hook
    useEffect(() => {
        getUsersData()
    }, []);

    return (
        <div>
            <h1>Data List</h1>

            {isLoadingUsersData ? (
                <LoadingComponent />
            ) : (
                usersData?.map((user) => (
                    <div key={user.id} className='user-card'>
                        <div>No. {user.id}</div>
                        <div>First Name: {user.firsName}</div>
                        <div>Last Name: {user.lastName}</div>
                        <div>Address: {user.Address}</div>
                        <div>Age: {user.Age}</div>
                    </div>
                ))
            )}
        </div>
    );
}

export default AboutMe;
