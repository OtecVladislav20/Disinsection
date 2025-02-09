export default function FormOpen({handlerCloseForm, isActiveForm}): JSX.Element {
  return (
    <section className={`open-form ${isActiveForm ? 'flex' : ''}`}>
      <form action="" className="services-form-def open-form-element">
        <h3 className="services-form-title-def">Оставить заявку</h3>
        <input
          type="text"
          name="name"
          placeholder="Как вас зовут?"
          className="form-input-def"
        />
        <input
          type="phone"
          name="phone"
          placeholder="Контактный номер"
          className="form-input-def"
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          className="form-textarea-def"
          defaultValue=""
        />
        <button type="submit" className="form-btn">
          Отправить
        </button>
        <button className='close-form' onClick={handlerCloseForm}>
          <img src="../markup/img/close-btn.svg" alt="" className='close-btn-form'/>
        </button>
      </form>
    </section>
  );
}
