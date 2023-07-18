import styles from './ProgressBar.module.scss'
import Fade from 'react-reveal/Fade';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBar = () => {

    return (
        <div className={styles.progressbar}>
            <div className={styles.progress_container}>
                <Fade left>
                    <div className={`${styles.progress} ${styles.html}`}>
                        <div className={styles.progress_values}>
                            <h3>75<span>%</span></h3>
                            <h4>HTML & CSS</h4>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className={`${styles.progress} ${styles.js}`}>
                        <div className={styles.progress_values}>
                            <h3>75<span>%</span></h3>
                            <h4>JS</h4>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className={`${styles.progress} ${styles.ts}`}>
                        <div className={styles.progress_values}>
                            <h3>75<span>%</span></h3>
                            <h4>TYPE SCRIPT</h4>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className={`${styles.progress} ${styles.react}`}>
                        <div className={styles.progress_values}>
                            <h3>85<span>%</span></h3>
                            <h4>REACT</h4>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className={`${styles.progress} ${styles.toolkit}`}>
                        <div className={styles.progress_values}>
                            <h3>90<span>%</span></h3>
                            <h4>REDUX-</h4>
                            <h4>TOOLKIT</h4>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className={`${styles.progress} ${styles.unit_tests}`}>
                        <div className={styles.progress_values}>
                            <h3>70<span>%</span></h3>
                            <h4>UNIT TESTS</h4>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className={`${styles.progress} ${styles.formik}`}>
                        <div className={styles.progress_values}>
                            <h3>80<span>%</span></h3>
                            <h4>FORMIK</h4>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className={`${styles.progress} ${styles.mui}`}>
                        <div className={styles.progress_values}>
                            <h3>80<span>%</span></h3>
                            <h4>TAILWINDCSS</h4>
                            <h4>& MUI</h4>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}