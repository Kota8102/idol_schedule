import React from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../component/organisms/layout';

const NotFound: React.FC = () => {
    const location = useLocation();

    return (
        <Layout>
            <div className="bg-red-500 text-white text-center py-12">
            <h1 className="text-6xl">404</h1>
            <p className="text-xl">{location.pathname}は見つかりませんでした。</p>
        </div>
        </Layout>
        
    );
}

export default NotFound;
