import styles from './Success.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const Success = () => {
    return (
        <div className={styles.success_container}>
            <span className={styles.circle_check}><FontAwesomeIcon icon={faCircleCheck} className={styles.circle_check} /></span>
            <span className={styles.message}>Message sent,</span>
            <span className={styles.message}>Thank You!</span>
        </div>

    );
}