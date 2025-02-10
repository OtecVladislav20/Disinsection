export enum AppRoute {
  Main = '/',
  ServicesO = '/services/dehumidification',
  ServicesC = '/services/cleaning',
  ServicesD = '/services/dismantling',
  ServicesDDDD = '/services/dddd',
  Price = '/price',
  AboutUs = '/aboutus',
  NotFoundScreen = '/*',
}

export const EMAILTOKEN = '1d9fc916-ec09-4e39-9f45-7b0b78102371';

export type TCloseForm = {
  handlerCloseForm: () => void;
  isActiveForm: boolean;
}

export type THandleCloseForm = {
  handlerCloseForm: () => void;
}
