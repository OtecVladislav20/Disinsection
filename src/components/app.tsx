import { Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/main-page';
import { AppRoute } from '../const';


export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route path={AppRoute.Services} element={<MainPage />} />
      <Route path={AppRoute.Price} element={<MainPage />} />
      <Route path={AppRoute.AboutUs} element={<MainPage />} />
      <Route path={AppRoute.NotFoundScreen} element={<MainPage />} />
    </Routes>
  );
}
