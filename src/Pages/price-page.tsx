/* eslint-disable react/no-unknown-property */
import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';
import CleaningPrice from '../components/price/cleaning-price';
import DddPrice from '../components/price/ddd-price';
import DehumidificationPrice from '../components/price/dehumidification-price';
import DismantlingPrice from '../components/price/dismantling-price';
import { TDefaultPages } from '../const';


export default function PricePage({ chooseActivePage, handlerCloseForm, isActiveForm }: TDefaultPages): JSX.Element {
  return (
    <>
      <Header chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
      <main className='flex'>
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <div className="main-left price-container">
          <OpenButton handlerCloseForm={handlerCloseForm}/>
          <DehumidificationPrice/>
          <CleaningPrice/>
          <DismantlingPrice/>
          <DddPrice/>
        </div>
        <div className="form-sp">
          <div className="form-wrapper-sp">
            <FormDef/>
          </div>
        </div>
      </main>
      <Footer chooseActivePage={chooseActivePage}/>
    </>
  );
}
