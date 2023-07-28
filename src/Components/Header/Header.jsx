import React from 'react';
import imgLogo from '../../assets/logo.svg';
import profileImg from '../../assets/profile.jpg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className=" container container-header">
        <div className="area-logo">
          <img src={imgLogo} alt="logo cubos academy" />
        </div>

        <div className="area-profile-txt">
          <img src={profileImg} alt="imagem do usuário" />
          <p>Bem vindo, Filipe.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
