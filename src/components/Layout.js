import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <main id="main-content" role="main" aria-label="Main content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
