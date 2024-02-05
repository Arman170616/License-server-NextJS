// app_router.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './index';
import ListPage from '../pages/oem/list';


const AppRouter: React.FC = () => {
    return (
        <Router>
            
            <Route path="/" Component={HomePage} />
            <Route path="/oem/list" Component={ListPage} />

        </Router>
    );
};

export default AppRouter;
