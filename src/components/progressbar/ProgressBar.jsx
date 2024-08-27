import styles from './ProgressBar.module.scss';
import Fade from 'react-reveal/Fade';

export const ProgressBar = () => {
  return (
    <div className={styles.progressbar}>
      <div className={styles.progress_container}>
        <Fade left>
          <div className={`${styles.progress} ${styles.html}`}>
            <div className={styles.progress_values}>
              <h4>HTML/CSS</h4>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.progress} ${styles.sass}`}>
            <div className={styles.progress_values}>
              <h4>SASS</h4>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.progress} ${styles.js}`}>
            <div className={styles.progress_values}>
              <h4>JS</h4>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.progress} ${styles.react}`}>
            <div className={styles.progress_values}>
              <h4>REACT</h4>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.progress} ${styles.ts}`}>
            <div className={styles.progress_values}>
              <h4>TYPE SCRIPT</h4>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.progress} ${styles.redux}`}>
            <div className={styles.progress_values}>
              <h4>REDUX</h4>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.progress} ${styles.toolkit}`}>
            <div className={styles.progress_values}>
              <h4>RTK</h4>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.progress} ${styles.context_api}`}>
            <div className={styles.progress_values}>
              <h4>CONTEXT API</h4>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.progress} ${styles.unit_tests}`}>
            <div className={styles.progress_values}>
              <h4>UNIT TESTS</h4>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.progress} ${styles.formik}`}>
            <div className={styles.progress_values}>
              <h4>FORMIK</h4>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.progress} ${styles.redux_form}`}>
            <div className={styles.progress_values}>
              <h4>REDUX FORM</h4>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.progress} ${styles.tail}`}>
            <div className={styles.progress_values}>
              <h4>TAILWINDCSS</h4>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.progress} ${styles.mui}`}>
            <div className={styles.progress_values}>
              <h4>MUI</h4>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.progress} ${styles.firebase}`}>
            <div className={styles.progress_values}>
              <h4>FIREBASE</h4>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.progress} ${styles.mern}`}>
            <div className={styles.progress_values}>
              <h4>MERN</h4>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.progress} ${styles.next_js}`}>
            <div className={styles.progress_values}>
              <h4>NEXT.JS</h4>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.progress} ${styles.git_github}`}>
            <div className={styles.progress_values}>
              <h4>GIT/GITHUB</h4>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
