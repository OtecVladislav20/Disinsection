import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/main-page';
import { AppRoute } from './const';
import PricePage from './Pages/price-page';
import About from './Pages/about-page';
import { useState } from 'react';
import ServicePageO from './Pages/service-page-o';
import ServicePageC from './Pages/service-page-c';
import ServicePageD from './Pages/service-page-d';
import ServicePageDDDD from './Pages/service-page-dddd';
import NotFound from './Pages/not-found-page';


export default function App(): JSX.Element {
  const [isActiveForm, setActiveForm] = useState(false);
  const handlerCloseForm = () => {
    setActiveForm(!isActiveForm);
  };

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.ServicesO} element={<ServicePageO handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.ServicesC} element={<ServicePageC handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.ServicesD} element={<ServicePageD handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.ServicesDDDD} element={<ServicePageDDDD handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.Price} element={<PricePage handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.AboutUs} element={<About handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>} />
      <Route path={AppRoute.NotFoundScreen} element={<NotFound />} />
    </Routes>
  );
}
