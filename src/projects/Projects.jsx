import styles from './Projects.module.css'
import { Project } from "./project/Project";
import { Title } from '../components/common/title/Title';
import todolistImg from './project_images/todolist.png'

export const Projects = () => {

    const description = 'Brief project description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    const todolistImage = {
        backgroundImage: `url(${todolistImg})`
    }

    return (
        <div className={styles.projects}>
            <div className={styles.projects_container}>
                <Title title={'My Projects'} />
                <div className={styles.projects_box_container}>
                    <Project description={description} projectTitle={'Todolist-JS'} image={todolistImage} />
                    <Project description={description} projectTitle={'Counter'} image={todolistImage} />
                    <Project description={description} projectTitle={'Todolist-ReactJS'} image={todolistImage} />
                </div>
            </div>
        </div>
    );
};

