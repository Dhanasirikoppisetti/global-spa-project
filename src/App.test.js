import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const renderApp = (initialRoute = '/en/home') => {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe('App Component', () => {
  test('renders without crashing', () => {
    renderApp();
    expect(screen.getByText(/Blissful Beauty/i)).toBeInTheDocument();
  });

  test('renders Home page on /en/home route', () => {
    renderApp('/en/home');
    expect(screen.getByText(/Your Daily Glow Starts Here/i)).toBeInTheDocument();
  });

  test('renders Products page on /en/products route', () => {
    renderApp('/en/products');
    expect(screen.getByText(/Skincare Products/i)).toBeInTheDocument();
  });
});
