export default function DddPrice(): JSX.Element {
  return (
    <section className="price-p conteiner">
      <h2 className="services-title title-h2">Цены на ДДД</h2>
      <table cellPadding="15px" rules="rows" bgcolor="#fff">
        <tbody>
          <tr>
            <td className="table-title">Тип работы</td>
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
          <tr>
            <td className="table-p">Озонирование и сухой туман</td>
            <td className="table-p">от 500 руб</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
