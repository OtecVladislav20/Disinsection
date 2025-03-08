import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/main-page';
import { AppRoute } from './const';
import PricePage from './Pages/price-page';
import About from './Pages/about-page';
import { useState } from 'react';
import ServicePageO from './Pages/service-page-o';
import NotFound from './Pages/not-found-page';
import { PagesData } from './utils/mocks';


export default function App(): JSX.Element {
  const [isActiveForm, setActiveForm] = useState(false);
  const handlerCloseForm = () => {
    setActiveForm(!isActiveForm);
  };

  const [activePage, setActivePage] = useState('dehumidification');
  function chooseActivePage(pageId: string): void {
    setActivePage(pageId);
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage activePage={activePage} chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.Services} element={
        <ServicePageO 
            PagesData={PagesData} 
            activePage={activePage}
            chooseActivePage={chooseActivePage}
            handlerCloseForm={handlerCloseForm} 
            isActiveForm={isActiveForm}
          />
        } 
      />
      <Route path={AppRoute.Price} element={<PricePage activePage={activePage} chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.AboutUs} element={<About activePage={activePage} chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.NotFoundScreen} element={<NotFound />} />
    </Routes>
  );
}
