import React from 'react';
import styles from './Main.module.css';


export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.greeting}>
                    <span className={styles.greeting_span}>Hi There</span>
                    <h1>I am <span className={styles.name}>Andrei</span></h1>
                    <span className={styles.position_span}>A FRONT-END DEVELOPER</span>
                </div>
                <div className={styles.main_img}></div>
            </div>

        </div>
    );
};
