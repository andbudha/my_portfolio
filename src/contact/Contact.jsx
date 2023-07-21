import styles from './Contact.module.scss'
import { Title } from '../components/common/title/Title';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9kh6aan', 'template_gen5y9g', form.current, 'FfwDLaRttIREIuHjO')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={styles.contact} id={'contact'}>
            <Title title={'Get In Touch'} />
            <div className={styles.contact_container}>
                <form className={styles.form_container} ref={form} onSubmit={sendEmail}>
                    <input className={styles.input_field} type="text" required placeholder={'Name*'} name="user_name" />
                    <input className={styles.input_field} type="email" required placeholder={'Email*'} name="user_email" />
                    <textarea className={styles.textarea_field} cols="auto" rows="auto" placeholder={'Your Message*'} name="message" />
                    <input className={styles.submit_btn} type="submit" value={'SEND MESSAGE'} />
                </form>
            </div>
        </div>
    );
};

