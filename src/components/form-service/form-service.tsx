import { useEffect, useState } from 'react';
import { EMAILTOKEN } from '../../const';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TForm } from '../form-open/form-open';

export default function FormService(): JSX.Element {
  const { register, reset, handleSubmit, formState: {errors, isValid} } = useForm<TForm>({mode: 'onChange'});

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
    <>
      <div className={`sended-window ${isSendedForm ? 'display-block' : ''}`}>Форма успешно отправлена!</div>
      <div className="form1">
        <form className="services-form" onSubmit={handleSubmit(handlerSend)}>
          <h3 className="services-form-title input-title1">
            Оставить заявку
          </h3>
          <input
            type="text"
            name="name"
            placeholder="* ФИО"
            className={`form-input-def ${errors?.name ? 'true' : 'false'}`}
            {...register('name', { required: true})}
          />
          <input
            type="tel"
            name="phone"
            placeholder="* 8-900-000-00-00"
            className="form-input-def"
            {...register('phone', { required: true})}
          />
          <input
            type="text"
            name="locaion"
            placeholder="* Город"
            className="form-input-def"
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
        </form>
      </div>
    </>
  );
}
