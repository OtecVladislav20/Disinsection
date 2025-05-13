import { useEffect, useState } from 'react';
import { EMAILTOKEN, TCloseForm } from '../../const';
import { SubmitHandler, useForm } from 'react-hook-form';


export type TForm = {
  name: string;
  phone: number;
  location: string;
  message: string;
};

export default function FormOpen({handlerCloseForm, isActiveForm}: TCloseForm): JSX.Element {
  const { register, reset, handleSubmit, formState: {isValid} } = useForm<TForm>({mode: 'onChange'});

  const [isSendedForm, setSendedForm] = useState(false);
  const handlerSendedForm = () => {
    setSendedForm(true);
  };
  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setSendedForm(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isSendedForm]);


  const handlerSend: SubmitHandler<TForm> = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phone', data.phone.toString());
    formData.append('location', data.location);
    if (data.message) {
      formData.append('message', data.message);
    }
    formData.append('access_key', EMAILTOKEN);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    reset();
    const result = await response.json();
    if (result.success) {
      handlerSendedForm();
    } else {
      console.log('Error', data);
    }
  };

  return (
    <section className={`open-form ${isActiveForm ? 'flex' : ''}`}>
      <div className={`sended-window ${isSendedForm ? 'display-block' : ''}`}>Форма успешно отправлена!</div>
      <form className="services-form-def open-form-element" onSubmit={handleSubmit(handlerSend)}>
        <h3 className="services-form-title-def">Оставить заявку</h3>
        <input
          type="text"
          name="name"
          placeholder="* ФИО"
          className='form-input-def form-input-def-open'
          {...register('name', { required: true})}
        />
        <input
          type="tel"
          name="phone"
          placeholder="* 8-900-000-00-00"
          className="form-input-def form-input-def-open"
          {...register('phone', { required: true})}
        />
        <input
          type="text"
          name="locaion"
          placeholder="* Город"
          className="form-input-def form-input-def-open"
          {...register('location', { required: true})}
        />
        <textarea
          name="message"
          placeholder="Какая у вас проблема?"
          className="form-textarea-def"
          defaultValue=""
          {...register('message')}
        />
        <button type="submit" className="form-btn" disabled={!isValid}>
          Отправить
        </button>
        <button className='close-form' onClick={handlerCloseForm}>
          <img src="../img/close-btn.svg" alt="" className='close-btn-form'/>
        </button>
      </form>
    </section>
  );
}
