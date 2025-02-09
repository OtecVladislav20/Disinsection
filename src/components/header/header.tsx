import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useState } from 'react';
import FormOpen from '../form-open/form-open';

export default function Header({ handlerCloseForm, isActiveForm}): JSX.Element {
  const [isBurger, setBurger] = useState(false);

  function handlerBurger() {
    setBurger(!isBurger);
  }

  return (
    <header className="navigation flex">
      <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
      <a href="#" className="logo-header">
        <img src="../markup/img/Logo.svg" alt="Logo" className="Logo" />
      </a>
      <nav className={`nav-bar ${isBurger ? 'flex' : ''}`}>
        <div className="nav-links flex">
          <Link to={AppRoute.AboutUs} className="nav-list">
            О нас
          </Link>
          <a href="" className="nav-list">
            Услуги
          </a>
          <Link to={AppRoute.Price} className="nav-list">
            Цены
          </Link>
          <Link to={AppRoute.AboutUs} className="nav-list">
            Контакты
          </Link>
        </div>
        <div className="flex nav-contact">
          <button className="nav-button" onClick={handlerCloseForm}>Обрытный звонок</button>
          <div className="images-contacts">
            <a href="">
              <img
                src="../markup/img/Telegram.svg"
                alt="Telegram"
                className="image-contacts"
              />
            </a>
            <a href="">
              <img
                src="../markup/img/WhatsApp.svg"
                alt="WhatsApp"
                className="image-contacts"
              />
            </a>
          </div>
          <div>
            <div className="flex nav-phone">
              <img src="../markup/img/phone.svg" alt="" />
              <a href="tel:+79068006808" className="nav-phone-text">
                +7 906 800 68 08
              </a>
            </div>
            <div className="flex nav-phone">
              <img src="../markup/img/mail.svg" alt="" />
              <a href="mailto:maslakov20@mail.ru" className="nav-phone-text">
                maslakov20@mail.ru
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className={`burger ${isBurger ? 'active' : ''}`} onClick={() => handlerBurger()}>
        <span />
      </div>
    </header>
  );
}
