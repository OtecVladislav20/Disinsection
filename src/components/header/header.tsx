import { Link } from 'react-router-dom';
import { AppRoute, TDefaultPages, } from '../../const';
import { useState } from 'react';
import FormOpen from '../form-open/form-open';
import { ServicesState } from '../../utils/mocks';


export default function Header({ chooseActivePage, handlerCloseForm, isActiveForm}: TDefaultPages): JSX.Element {
  const [isBurger, setBurger] = useState(false);
  const [isActiveDropMenu, setActiveDropMenu] = useState(false);

  function handlerBurger() {
    setBurger(!isBurger);
  }

  function handlerDropMenu() {
    setActiveDropMenu(!isActiveDropMenu);
  }

  return (
    <header className="navigation flex">
      <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
      <Link to={AppRoute.Main} className="logo-header">
        <img src="../img/Logo.svg" alt="Logo" className="Logo" />
      </Link>
      <nav className={`nav-bar ${isBurger ? 'flex' : ''}`}>
        <div className="nav-links flex">
          <Link to={AppRoute.AboutUs} className="nav-list">
            О нас
          </Link>
          <div className="drop-menu flex">
            <p className='nav-list-drop' onClick={handlerDropMenu}>Услуги</p>
            <img src="../img/arrow-header.svg" alt="" />
            <ul className={`drop-menu-list ${isActiveDropMenu ? 'display-block' : ''}`}>
              <li className='drop-menu-item'>
                <a onClick={() => chooseActivePage(ServicesState.Dehumidification)} href={`/services/${ServicesState.Dehumidification}`} className='drop-link'>
                  Осушение
                </a>
              </li>
              <li className='drop-menu-item'>
                <a onClick={() => chooseActivePage(ServicesState.Cleaning)} href={`/services/${ServicesState.Cleaning}`} className='drop-link'>
                  Уборка помещений
                </a>
              </li>
              <li className='drop-menu-item'>
                <a onClick={() => chooseActivePage(ServicesState.Dismantling)} href={`/services/${ServicesState.Dismantling}`} className='drop-link'>
                  Демонтажные работы
                </a>
              </li>
              <li className='drop-menu-item'>
                <a onClick={() => chooseActivePage(ServicesState.DDD)} href={`/services/${ServicesState.DDD}`} className='drop-link'>
                  ДДД
                </a>
              </li>
            </ul>
          </div>
          <Link to={AppRoute.Price} className="nav-list">
            Цены
          </Link>
          <a href='#contacts' className="nav-list">
            Контакты
          </a>
        </div>
        <div className="flex nav-contact">
          <button className="nav-button" onClick={handlerCloseForm}>Обрытный звонок</button>
          <div className="images-contacts">
            <a href="https://t.me/artem2530">
              <img
                src="../img/Telegram.svg"
                alt="Telegram"
                className="image-contacts"
              />
            </a>
            <a href="https://wa.me/+79199093299">
              <img
                src="../img/WhatsApp.svg"
                alt="WhatsApp"
                className="image-contacts"
              />
            </a>
          </div>
          <div>
            <div className="flex nav-phone">
              <img src="../img/phone.svg" alt="" />
              <a href="tel:+79199093299" className="nav-phone-text">
                +7 919 909 32 99
              </a>
            </div>
            <div className="flex nav-phone">
              <img src="../img/mail.svg" alt="" />
              <a href="mailto:eckoprofklin@yandex.ru" className="nav-phone-text">
                eckoprofklin@yandex.ru
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
