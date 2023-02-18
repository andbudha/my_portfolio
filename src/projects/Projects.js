import React from 'react';
import styles from './Projects.module.css'
import {Project} from "./project/Project";

export const Projects = () => {

    const description = 'Brief project description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    return (
        <div className={styles.projects}>
            <div className={styles.projects_container}>
                <div className={styles.projects_title}>
                    <h2>My Projects</h2>
                </div>
                <div className={styles.projects_box_container}>
                    <Project description={description}/>
                    <Project description={description}/>
                </div>
            </div>
        </div>
    );
};

