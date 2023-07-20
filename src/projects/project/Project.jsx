import styles from './Project.module.scss'
import Fade from 'react-reveal/Fade';

export const Project = (props) => {

    return (
        <Fade bottom>
            <div className={styles.project_box}>
                <a href={props.link} target="_blank" className={styles.uni_btn}><span>CLICK FOR MORE...</span></a>
                <div className={styles.img_container} style={props.image}>
                </div>
                <div className={styles.project_description_box}>
                    <div className={styles.title}>
                        <h3 className={styles.project_title}>{props.projectTitle}</h3>
                    </div>
                    <p className={styles.project_description}>
                        {props.description}
                    </p>
                </div>

            </div >
        </Fade>
    );
};
