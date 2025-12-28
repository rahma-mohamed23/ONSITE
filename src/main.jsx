import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProductProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ProductProvider>
    </StrictMode>
);