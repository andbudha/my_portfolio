import styles from './Contact.module.scss'
import { Title } from '../components/common/title/Title';

export const Contact = () => {
    return (
        <div className={styles.contact} id={'contact'}>
            <Title title={'Get In Touch'} />
            <div className={styles.contact_container}>
                <form className={styles.form_container}>
                    <input className={styles.input_field} type="text" required placeholder={'Name*'} />
                    <input className={styles.input_field} type="text" required placeholder={'Email*'} />
                    <textarea className={styles.textarea_field} name="" id="" cols="auto" rows="auto" placeholder={'Your Message*'} ></textarea>
                    <input className={styles.submit_btn} type="submit" value={'SEND MESSAGE'} />
                </form>
            </div>
        </div>
    );
};

