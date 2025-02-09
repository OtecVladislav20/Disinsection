import { Route, Routes } from 'react-router-dom';
import MainPage from '../../Pages/main-page';
import { AppRoute } from '../../const';
import PricePage from '../../Pages/price-page';
import ServicePage from '../../Pages/service-page';
import About from '../../Pages/about-page';
import { useState } from 'react';


export default function App(): JSX.Element {
  const [isActiveForm, setActiveForm] = useState(false);
  const handlerCloseForm = (event) => {
    event.preventDefault();
    setActiveForm(!isActiveForm);
  };

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.Services} element={<ServicePage handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.Price} element={<PricePage handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.AboutUs} element={<About handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      {/* <Route path={AppRoute.NotFoundScreen} element={<MainPage />} /> */}
    </Routes>
  );
}
