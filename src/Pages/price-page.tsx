import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';


export default function PricePage({ handlerCloseForm, isActiveForm }): JSX.Element {
  return (
    <>
      <Header handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
      <main className='flex'>
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <div className="main-left price-container">
          <OpenButton handlerCloseForm={handlerCloseForm}/>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на осушение</h2>
            <table cellPadding="12px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на осушение</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на осушение</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на осушение</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <div className="form-sp">
          <div className="form-wrapper-sp">
            <FormDef/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
