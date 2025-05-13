import { TPagesData } from './utils/mocks';

export enum AppRoute {
  Main = '/',
  Services = '/services/:id',
  Price = '/price',
  AboutUs = '/aboutus',
  NotFoundScreen = '/*',
}

export const EMAILTOKEN = '1d9fc916-ec09-4e39-9f45-7b0b78102371';
// export const EMAILTOKEN = '45fffb7e-0401-4be9-8aaa-623800990150';

export type TCloseForm = {
  handlerCloseForm: () => void;
  isActiveForm: boolean;
}

export type THandleCloseForm = {
  handlerCloseForm: () => void;
}

export type TPages = {
  PagesData: {[key: string]: TPagesData};
  activePage: string;
  chooseActivePage: (pageId: string) => void;
  handlerCloseForm: () => void;
  isActiveForm: boolean;
}

export type TDefaultPages = {
  chooseActivePage: (pageId: string) => void;
  handlerCloseForm: () => void;
  isActiveForm: boolean;
}
