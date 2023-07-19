import styles from './Footer.module.scss';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <h3 className={styles.fullname}>Andrei Bartov</h3>

                <div className={styles.link_container}>
                    <Fade bottom>
                        <a className={styles.link} href="https://www.linkedin.com/in/andrei-bartov-584427201" target="_blank"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></a>
                    </Fade>
                    <Fade bottom>
                        <a className={styles.link} href="https://github.com/andbudha" target="_blank"><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a>
                    </Fade>
                    <Fade bottom>
                        <a className={styles.link} href="https://t.me/andbudha" target="_blank"><FontAwesomeIcon icon={faTelegram} className={styles.icon} /></a>
                    </Fade>
                </div>
                <h3 className={styles.copyright}><span>&copy;</span> All Rights Reserved</h3>
            </div>
        </div >
    );
};
