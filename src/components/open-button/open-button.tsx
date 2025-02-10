import { THandleCloseForm } from '../../const';


export default function OpenButton({ handlerCloseForm }: THandleCloseForm) {
  return (
    <section id="open-button" className="open-button">
      <a href="" onClick={handlerCloseForm}>
        <img src="../markup/img/open-button.svg" alt="" />
      </a>
    </section>
  );
}
