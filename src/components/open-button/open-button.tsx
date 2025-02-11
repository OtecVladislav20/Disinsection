import { THandleCloseForm } from '../../const';


export default function OpenButton({ handlerCloseForm }: THandleCloseForm) {
  const test = (e) => {
    e.preventDefault();
    handlerCloseForm();
  };

  return (
    <section id="open-button" className="open-button">
      <a href="" onClick={test}>
        <img src="../img/open-button.svg" alt="" />
      </a>
    </section>
  );
}
