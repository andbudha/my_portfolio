import React from 'react';
import styles from './Main.module.css';


export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h1>I am Andrei Bartov</h1>
                    <p>A FRONTEND-DEVELOPER</p>
                </div>
                <div className={styles.main_img}></div>
            </div>

        </div>
    );
};
