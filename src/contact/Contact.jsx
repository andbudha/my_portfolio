import styles from './Contact.module.css'
import { Title } from '../components/common/title/Title';

export const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact_container}>
                <Title title={'Get In Touch'} />
                <form className={styles.form_container}>
                    <input className={styles.input_field} type="text" />
                    <input className={styles.input_field} type="text" />
                    <textarea className={styles.textarea_field} name="" id="" cols="auto" rows="auto"></textarea>
                    <input className={styles.submit_btn} type="submit" value={'SEND'} />
                </form>
            </div>
        </div>
    );
};

