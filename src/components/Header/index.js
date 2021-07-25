import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import logo from '../../images/logo.png';

import './Header.css';

const Header = () => {
  const { headerColor } = useContext(Context);
  return (
    <header
      className={`container-header ${headerColor && 'color-header'}`}
    >
      <Link to="/">
        <img
          className="logo-icon"
          src={logo}
          alt="Logo do site"
        />
      </Link>
    </header>

  );
};

export default Header;
