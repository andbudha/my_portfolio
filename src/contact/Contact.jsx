import styles from './Contact.module.scss';
import { Title } from '../components/common/title/Title';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader } from './Loader/Loader';
import { Success } from './Success/Success';
import { Failure } from './Failure/Failure';

export const Contact = () => {
  const form = useRef();

  //sending status states
  const [sendingStatus, setSendingStatus] = useState(false);
  const [sendingSuccess, setSendingSuccess] = useState(false);
  const [sendingFailure, setSendingFailure] = useState(false);

  //input states
  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [textareaInputValue, setTextareaInputValue] = useState('');

  //EmailJS form validation
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9kh6aan',
        'template_gen5y9g',
        form.current,
        'FfwDLaRttIREIuHjO'
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setSendingStatus(false);
            setSendingSuccess(true);
            setTimeout(() => {
              setSendingSuccess(false);
            }, 4000);
          }
          setNameInputValue('');
          setEmailInputValue('');
          setTextareaInputValue('');
        },
        (error) => {
          if (error) {
            setSendingFailure(true);
            setSendingStatus(false);
            setTimeout(() => {
              setSendingFailure(false);
            }, 4000);
          }
        }
      );
  };

  //input value catching func.
  const typingNameHandler = (event) => {
    setNameInputValue(event.currentTarget.value);
  };

  const typingEmailHandler = (event) => {
    setEmailInputValue(event.currentTarget.value);
  };

  const typingTextHandler = (event) => {
    setTextareaInputValue(event.currentTarget.value);
  };

  //loader activating func
  const sendHandler = () => {
    const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      emailInputValue
    );
    if (nameInputValue !== '' && email && textareaInputValue !== '') {
      setSendingStatus(true);
    }
  };

  return (
    <div className={styles.contact} id={'contact'}>
      <Title title={'Get In Touch'} />

      <div className={styles.contact_container}>
        {sendingStatus ? (
          <div className={styles.loader_canvas}>
            {' '}
            <Loader />
          </div>
        ) : (
          ''
        )}
        {sendingSuccess ? (
          <div className={styles.success_canvas}>
            {' '}
            <Success />
          </div>
        ) : (
          ''
        )}
        {sendingFailure ? (
          <div className={styles.failure_canvas}>
            {' '}
            <Failure />
          </div>
        ) : (
          ''
        )}
        <form className={styles.form_container} ref={form} onSubmit={sendEmail}>
          <input
            className={styles.input_field}
            type="text"
            required
            placeholder={'Name*'}
            name="user_name"
            onChange={typingNameHandler}
            value={nameInputValue}
          />
          <input
            className={styles.input_field}
            type="email"
            required
            placeholder={'Email*'}
            name="user_email"
            onChange={typingEmailHandler}
            value={emailInputValue}
          />
          <textarea
            className={styles.textarea_field}
            cols="auto"
            rows="auto"
            placeholder={'Your Message*'}
            name="message"
            onChange={typingTextHandler}
            value={textareaInputValue}
            required
          />
          <input
            className={styles.submit_btn}
            type="submit"
            value={'SEND MESSAGE'}
            onClick={sendHandler}
          />
        </form>
      </div>
    </div>
  );
};
