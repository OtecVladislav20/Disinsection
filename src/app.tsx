import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/main-page';
import { AppRoute } from './const';
import PricePage from './Pages/price-page';
import About from './Pages/about-page';
import { useEffect, useState } from 'react';
import NotFound from './Pages/not-found-page';
import { PagesData } from './utils/mocks';
import ServicePage from './Pages/service-page';


export default function App(): JSX.Element {
  const [isActiveForm, setActiveForm] = useState(false);
  const handlerCloseForm = () => {
    setActiveForm(!isActiveForm);
  };

  const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || 'dehumidification');
  function chooseActivePage(pageId: string): void {
    setActivePage(pageId);
  }
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.Services} element={<ServicePage PagesData={PagesData} activePage={activePage} chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.Price} element={<PricePage chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.AboutUs} element={<About chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.NotFoundScreen} element={<NotFound />} />
    </Routes>
  );
}
