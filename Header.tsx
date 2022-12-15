import * as React from 'react';
import './styles/style.css';
import './styles/header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="home-icon"></div>
        <div className="store-name">ESS Store</div>
        <div className="store-number">9999</div>
      </div>
      <div className="header-right">
        <div className="complete-call">Complete Call</div>
        <div className="user-name">User1</div>
      </div>
    </div>
  );
}
