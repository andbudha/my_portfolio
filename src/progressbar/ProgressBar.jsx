import styles from './ProgressBar.module.css'


export const ProgressBar = () => {

    return (
        <div className={styles.progressbar}>
            <div className={styles.progress_container}>
                <div className={`${styles.progress} ${styles.html}`}>
                    <div className={styles.progress_values}>
                        <h3>75<span>%</span></h3>
                        <h4>HTML & CSS</h4>
                    </div>
                </div>
                <div className={`${styles.progress} ${styles.js}`}>
                    <div className={styles.progress_values}>
                        <h3>75<span>%</span></h3>
                        <h4>JS</h4>
                    </div>
                </div>
                <div className={`${styles.progress} ${styles.react}`}>
                    <div className={styles.progress_values}>
                        <h3>85<span>%</span></h3>
                        <h4>REACT</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}