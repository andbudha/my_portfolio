import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <h3 className={styles.fullname}>Andrei Bartov</h3>
                <div className={styles.link_container}>
                    <a className={styles.link} href="#"></a>
                    <a className={styles.link} href="#"></a>
                    <a className={styles.link} href="#"></a>
                    <a className={styles.link} href="#"></a>
                </div>
                <h3 className={styles.copyright}>&copy; All Rights Reserved</h3>
            </div>
        </div>
    );
};
