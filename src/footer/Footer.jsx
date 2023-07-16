import React from 'react';
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTelegram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'





export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <h3 className={styles.fullname}>Andrei Bartov</h3>
                <div className={styles.link_container}>
                    <a className={styles.link} href="#"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} style={{ color: "#ff4500", }} /></a>
                    <a className={styles.link} href="#"><FontAwesomeIcon icon={faGithub} className={styles.icon} style={{ color: "#ff4500", }} /></a>
                    <a className={styles.link} href="#"><FontAwesomeIcon icon={faTelegram} className={styles.icon} style={{ color: "#ff4500", }} /></a>
                    <a className={styles.link} href="#"><FontAwesomeIcon icon={faSquareFacebook} className={styles.icon} style={{ color: "#ff4500", }} /></a>
                </div>
                <h3 className={styles.copyright}><span>&copy;</span> All Rights Reserved</h3>
            </div>
        </div >
    );
};
