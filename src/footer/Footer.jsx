import styles from './Footer.module.scss';
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <h3 className={styles.fullname}>Andrei Bartov</h3>

                <div className={styles.link_container}>
                    <Flip>
                        <a className={styles.link} href="#"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></a>
                    </Flip>
                    <Flip>
                        <a className={styles.link} href="#"><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a>
                    </Flip>
                    <Flip>
                        <a className={styles.link} href="#"><FontAwesomeIcon icon={faTelegram} className={styles.icon} /></a>
                    </Flip>
                    <Flip>
                        <a className={styles.link} href="#"><FontAwesomeIcon icon={faSquareFacebook} className={styles.icon} /></a>
                    </Flip>
                </div>
                <h3 className={styles.copyright}><span>&copy;</span> All Rights Reserved</h3>
            </div>
        </div >
    );
};
