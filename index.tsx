import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout';
import App from './App';
import './styles/colors.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Layout></Layout>
  </StrictMode>
);
