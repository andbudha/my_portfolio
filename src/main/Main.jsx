import React from 'react';
import styles from './Main.module.css';
import profileImgOne from './img/no_background_1.png'
import profileImgTwo from './img/no_background_2.png'


export const Main = () => {
    const profileImgMain = {
        backgroundImage: `url(${profileImgOne})`
    }

    const profileImgSecondary = {
        backgroundImage: `url(${profileImgTwo})`
    }
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.greeting}>
                    <span className={styles.greeting_span}>Hi There</span>
                    <h1>I am <span className={styles.name}>Andrei</span></h1>
                    <span className={styles.position_span}>A FRONT-END DEVELOPER</span>
                    <div className={styles}>

                    </div>
                </div>
                <div className={styles.main_img} style={profileImgMain}></div>
            </div>

        </div>
    );
};
