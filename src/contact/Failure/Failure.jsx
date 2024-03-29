import styles from './Failure.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export const Failure = () => {
    return (
        <div className={styles.failure_container}>
            <span className={styles.failure_icon}><FontAwesomeIcon icon={faCircleExclamation} className={styles.failure_icon} /></span>
            <span className={styles.message}>Unexpected error!</span>
            <span className={styles.message}> Please, try again.</span>
        </div>

    );
}