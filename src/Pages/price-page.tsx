import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';
import { TCloseForm } from '../const';


export default function PricePage({ handlerCloseForm, isActiveForm }: TCloseForm): JSX.Element {
  return (
    <>
      <Header handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
      <main className='flex'>
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <div className="main-left price-container">
          <OpenButton handlerCloseForm={handlerCloseForm}/>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на Осушение</h2>
            <table cellPadding="12px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Откачка воды</td>
                  <td className="table-p">от 800 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Просушка дома после затопа</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Просушка пола</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr>
                  <td className="table-p">Просушка потолка</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Просушка стен</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr>
                  <td className="table-p">Просушка строительной площадки</td>
                  <td className="table-p">от 400 р/м2</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на Уборку помещений</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Уборка запущенного помещения</td>
                  <td className="table-p">от 2000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Уборка после пожара</td>
                  <td className="table-p">от 3000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Уборка после умершего</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Уборка после ремонта</td>
                  <td className="table-p">от 2000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Уборка после затопления</td>
                  <td className="table-p">от 3000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Уничтожение плесени</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на Демонтажные работы</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Вывоз мусора</td>
                  <td className="table-p">от 400 руб/м3</td>
                </tr>
                <tr>
                  <td className="table-p">Комплексная уборка</td>
                  <td className="table-p">от 180 р/м2</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Демонтаж пола</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr>
                  <td className="table-p">Демонтаж стен</td>
                  <td className="table-p">от 350 р/м2</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Демонтаж потолка</td>
                  <td className="table-p">от 350 р/м2</td>
                </tr>
                <tr>
                  <td className="table-p">Демонтаж мебели</td>
                  <td className="table-p">от 500 р/м2</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на ДДД</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr>
                  <td className="table-p">Дезодорация</td>
                  <td className="table-p">от 1500 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Дезинфекция</td>
                  <td className="table-p">от 1200 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Дезинсекция</td>
                  <td className="table-p">от 1200 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Дератизация</td>
                  <td className="table-p">от 3000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Гербицидная обработка</td>
                  <td className="table-p">от 2000 руб</td>
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
