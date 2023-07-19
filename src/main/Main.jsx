import styles from './Main.module.scss';
import { TypeAnimation } from 'react-type-animation';
import profileImgOne from './img/no_background_1.1.png';
import profileImgTwo from './img/no_background_1.2.png';


export const Main = () => {
    const profileImgMain = {
        backgroundImage: `url(${profileImgOne})`
    }

    const profileImgSecondary = {
        backgroundImage: `url(${profileImgTwo})`
    }
    return (
        <div className={styles.main} id={'main'}>
            <div className={styles.main_container}>
                <div className={styles.greeting}>
                    <span className={styles.greeting_span}>Hi There</span>
                    <h1>I'm <span className={styles.name}>Andrei</span></h1>
                    <TypeAnimation
                        sequence={[
                            'FRONT-END DEVELOPER',
                            2500
                        ]}
                        wrapper="span"
                        speed={300}
                        repeat={1}
                        className={styles.position_span}
                    />
                    <div className={styles.btn_container}>
                        <a href="#projects" className={styles.projects_btn}>
                            MY PROJECTS
                        </a>
                        <a href="#" className={styles.contact_btn}>GET IN TOUCH</a>
                    </div>
                </div>
                <div className={styles.main_img} style={profileImgMain}></div>
                <div className={styles.secondary_img} style={profileImgSecondary}></div>
            </div>
        </div >
    );
};
