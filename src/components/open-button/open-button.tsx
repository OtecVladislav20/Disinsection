export default function OpenButton({ handlerCloseForm }) {
  return (
    <section id="open-button" className="open-button">
      <a href="" onClick={handlerCloseForm}>
        <img src="../markup/img/open-button.svg" alt="" />
      </a>
    </section>
  );
}
