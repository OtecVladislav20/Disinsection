export enum AppRoute {
  Main = '/',
  ServicesO = '/services/o',
  ServicesC = '/services/c',
  ServicesD = '/services/d',
  ServicesDDDD = '/services/dddd',
  Price = '/price',
  AboutUs = '/aboutus',
  NotFoundScreen = '/*',
}

export const EMAILTOKEN = '2eb95cf6-e924-449b-9a58-a42e21cf63ef';

export type TCloseForm = {
  handlerCloseForm: () => void;
  isActiveForm: boolean;
}

export type THandleCloseForm = {
  handlerCloseForm: () => void;
}
