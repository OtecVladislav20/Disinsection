export default function DismantlingPrice(): JSX.Element {
  return (
    <section className="price-p conteiner">
      <h2 className="services-title title-h2">Цены на Демонтажные работы</h2>
      <table cellPadding="15px" rules="rows" bgcolor="#fff">
        <tbody>
          <tr>
            <td className="table-title">Тип работы</td>
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
  );
}
