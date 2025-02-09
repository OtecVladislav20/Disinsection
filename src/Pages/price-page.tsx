import Footer from '../components/footer/footer';
import Header from '../components/header/header';
// import { price } from '../mocks';

/* eslint-disable react/no-unknown-property */
export default function PricePage(): JSX.Element {
  return (
    <>
      <Header/>
      <main className="flex">
        <div className="main-left price-container">
          <section id="open-button" className="open-button">
            <a href="">
              <img src="../public/images/open-button.svg" alt="" />
            </a>
          </section>
          {/* {price.map((key, index) => (

          ))} */}
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
            <form action="" className="services-form-def">
              <h3 className="services-form-title-def">Оставить заявку</h3>
              <input
                type="text"
                name="name"
                placeholder="Как вас зовут?"
                className="form-input-def"
              />
              <input
                type="email"
                name="email"
                placeholder="Контактный номер"
                className="form-input-def"
              />
              <textarea
                name="message"
                placeholder="Ваше сообщение"
                className="form-textarea-def"
                defaultValue=""
              />
              <div className="flex form-foto-wrapper">
                <img
                  src="../public/images/foto.svg"
                  alt="foto"
                  className="form-foto"
                />
                <a href="" className="form-foto-text">
                  Прикрепить фотографии
                </a>
              </div>
              <button type="submit" className="form-btn">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
