import { Route, Routes } from 'react-router-dom';
import MainPage from '../../Pages/main-page';
import { AppRoute } from '../../const';
import PricePage from '../../Pages/price-page';
import ServicePage from '../../Pages/service-page';
import About from '../../Pages/about-page';


export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route path={AppRoute.Services} element={<ServicePage />} />
      <Route path={AppRoute.Price} element={<PricePage />} />
      <Route path={AppRoute.AboutUs} element={<About />} />
      <Route path={AppRoute.NotFoundScreen} element={<MainPage />} />
    </Routes>
  );
}
