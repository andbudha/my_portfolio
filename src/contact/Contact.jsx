import styles from './Contact.module.scss'
import { Title } from '../components/common/title/Title';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { Loader } from './Loader/Loader';
import { Success } from './Success/Success';

export const Contact = () => {
    const form = useRef();

    //sendind status
    const [sendingStatus, setSendingStatus] = useState(false);
    const [sendingSuccess, setSendingSuccess] = useState(false);
    const [sendingFailure, setSendingFailure] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9kh6aan', 'template_gen5y9g', form.current, 'FfwDLaRttIREIuHjO')
            .then((result) => {
                if (result.text === 'OK') {
                    setSendingStatus(false);
                    setSendingSuccess(true);
                    setTimeout(() => {
                        setSendingSuccess(false);
                    }, 3500);
                }
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const sendHandler = () => {
        setSendingStatus(true);
    }
    return (
        <div className={styles.contact} id={'contact'}>
            <Title title={'Get In Touch'} />

            <div className={styles.contact_container}>
                {sendingStatus ? <div className={styles.loader_canvas}> <Loader /></div> : ''}
                {sendingSuccess ? <div className={styles.success_canvas}> <Success /></div> : ''}
                <form className={styles.form_container} ref={form} onSubmit={sendEmail}>
                    <input className={styles.input_field} type="text" required placeholder={'Name*'} name="user_name" />
                    <input className={styles.input_field} type="email" required placeholder={'Email*'} name="user_email" />
                    <textarea className={styles.textarea_field} cols="auto" rows="auto" placeholder={'Your Message*'} name="message" />
                    <input className={styles.submit_btn} type="submit" value={'SEND MESSAGE'} onClick={sendHandler} />
                </form>
            </div>
        </div>
    );
};

