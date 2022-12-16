import * as React from 'react';
import '../styles/style.css';
import '../styles/navbar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo"></div>
      <div className="navbar-spacer top"></div>
      <div className="admin-title">Administration</div>
      <div className="navbar-spacer bottom"></div>
      <div className="navbar-links">
        <div className="navbar-link active">Taxes</div>
        <div className="navbar-link">Discounts</div>
      </div>
    </div>
  );
}
