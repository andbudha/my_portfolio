import React from 'react';
import styles from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={styles.skill_box}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <div className={styles.skill_description}>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

