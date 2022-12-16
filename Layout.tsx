import * as React from 'react';
import TaxManager from './TaxManager';
import Header from './Header';
import NavBar from './NavBar';
import './styles/layout.css';
import './styles/style.css';

export default function Layout() {
  return (
    <div className="layout">
      <Header></Header>
      <div className="layout-body">
        <NavBar></NavBar>
        <TaxManager></TaxManager>
      </div>
    </div>
  );
}
