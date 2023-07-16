import styles from './Projects.module.scss'
import { Project } from "./project/Project";
import { Title } from '../components/common/title/Title';
import jsTodoImg from './project_images/jstodo.png'
import counterImg from './project_images/counter.png'
import reactTodoImg from './project_images/reacttodo.png'

export const Projects = () => {

    const description = 'Brief project description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    const jsTodoImage = {
        backgroundImage: `url(${jsTodoImg})`
    }

    const counterImage = {
        backgroundImage: `url(${counterImg})`
    }
    const reactTodoImage = {
        backgroundImage: `url(${reactTodoImg})`
    }


    return (
        <div className={styles.projects}>
            <div className={styles.projects_container}>
                <Title title={'My Projects'} />
                <div className={styles.projects_box_container}>
                    <Project description={description} projectTitle={'Todolist-JS'} image={jsTodoImage} />
                    <Project description={description} projectTitle={'Counter'} image={counterImage} />
                    <Project description={description} projectTitle={'Todolist-ReactJS'} image={reactTodoImage} />
                </div>
            </div>
        </div>
    );
};

