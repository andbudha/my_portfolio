import React from 'react';
import styles from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={styles.project_box}>
            <div className={styles.img_container}>
                <a href="#">Click For More</a>
            </div>
            <div className={styles.project_description}>
                <h3>Project Name</h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
};
