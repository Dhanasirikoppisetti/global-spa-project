import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Products from './pages/Products';
import SEOHead from './components/SEOHead';
import './App.css';
import Home from './pages/Home'

function App() {
  const { ready } = useTranslation();

  if (!ready) {
    return <div className="loading">Loading translations...</div>;
  }

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/:locale" element={<Layout />}>
          <Route path="home" element={
            <>
              <SEOHead 
                title="Home - Blissful Beauty" 
                description="Your daily glow starts here with natural, cruelty-free skincare products"
              />
             <Home/>
            </>
          } />
          <Route path="products" element={
            <>
              <SEOHead 
                title="Products - Blissful Beauty" 
                description="Explore our skincare product catalog with natural and organic options"
              />
              <Products />
            </>
          } />
          <Route index element={<Navigate to="home" replace />} />
        </Route>
        <Route path="/" element={<Navigate to="/en/home" replace />} />
        <Route path="*" element={<Navigate to="/en/home" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
