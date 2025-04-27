export default function CleaningPrice(): JSX.Element {
  return (
    <section className="price-p conteiner">
      <h2 className="services-title title-h2">Цены на Уборку помещений</h2>
      <table cellPadding="15px" rules="rows" bgcolor="#fff">
        <tbody>
          <tr>
            <td className="table-title">Тип работы</td>
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
          <tr>
            <td className="table-p">Чистка фасадов</td>
            <td className="table-p">от 25 руб/м2</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
