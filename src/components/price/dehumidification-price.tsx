export default function DehumidificationPrice(): JSX.Element {
  return (
    <section className="price-p conteiner">
      <h2 className="services-title title-h2">Цены на Осушение</h2>
      <table cellPadding="12px" rules="rows" bgcolor="#fff">
        <tbody>
          <tr>
            <td className="table-title">Тип работы</td>
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
  );
}
