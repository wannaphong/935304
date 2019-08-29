import React from 'react';
import logo from './logo.svg';

function Header() {
    return (
        <div>
            <header>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#"><img src={logo} width="30"/> รายรับ</a>
        </nav> 
      </header>
        </div>
    )
}

export default Header;
