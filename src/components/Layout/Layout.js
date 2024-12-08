// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';







const Layout = () => {
    return (
        <div className="layout">
            <Menu />
            <Outlet />
        </div>
    );
};

export default Layout;
