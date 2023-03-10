import React from 'react';
import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {

    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    return (
        <div className={styles.skills}>
            <div className={styles.skills_container}>
                <div className={styles.skills_title}>
                    <h2>My Skills</h2>
                </div>
                <div className={styles.skills_box_container}>
                    <Skill title={'JS'} description={description}/>
                    <Skill title={'CSS'} description={description}/>
                    <Skill title={'REACT'} description={description}/>
                </div>

            </div>
        </div>
    );
};

