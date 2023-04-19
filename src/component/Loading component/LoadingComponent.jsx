import React from 'react';
import { Spin } from 'antd';
import './LoadingComponent.css'

const LoadingComponent = () => {
    return (
        <div className='loadingContainer'>
            <Spin size='large' tip='loading...' />
        </div>
    );
}

export default LoadingComponent;
