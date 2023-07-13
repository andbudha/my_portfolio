
import styles from './Project.module.css'


export const Project = (props) => {

    return (
        <div className={styles.project_box}>
            <div className={styles.img_container} style={props.image}>
                <a href="">Click For More</a>
            </div>
            <div className={styles.project_description_box}>
                <h3 className={styles.project_title}>{props.projectTitle}</h3>
                <p className={styles.project_description}>
                    {props.description}
                </p>
            </div>
        </div>
    );
};
