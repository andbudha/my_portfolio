import styles from './Projects.module.css'
import { Project } from "./project/Project";
import { Title } from '../components/common/title/Title';

export const Projects = () => {

    const description = 'Brief project description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    return (
        <div className={styles.projects}>
            <div className={styles.projects_container}>
                <Title title={'My Projects'} />
                <div className={styles.projects_box_container}>
                    <Project description={description} />
                    <Project description={description} />
                </div>
            </div>
        </div>
    );
};

