
import styles from './Project.module.scss'


export const Project = (props) => {

    return (
        <div className={styles.project_box}>
            <a href="#" className={styles.uni_btn}><span>CLICK FOR MORE...</span></a>
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
        </div>
    );
};
