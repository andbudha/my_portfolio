import styles from './Projects.module.scss'
import { Project } from "./project/Project";
import { Title } from '../components/common/title/Title';
import jsTodoImg from './project_images/jstodo.jpg'
import counterImg from './project_images/counter.jpg'
import reactTodoImg from './project_images/reacttodo.jpg'
import { Loader } from '../contact/Loader/Loader';




export const Projects = () => {

    const jsTodo = 'This is an ordinary todolist wth Java Script. Once the list contains more than five tasks, a new field for tasklist-filtering will be displayed. Follow the link to experience more.';

    const reactCounter = 'A cool project where you can set a max-value and a start-value. While incrementing the start-value, the increment button will get disabled once the max-value has been reached.';

    const reactTodo = 'This todolist with ReactJS, offers more functionalies in comparison with the first todolist project. You can edit titles, tick off completed tasks, filter through tasks';

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
        <div className={styles.projects} id={'projects'}>
            <div className={styles.projects_container}>
                <Title title={'My Projects'} />
                <div className={styles.projects_box_container}>
                    <Project description={jsTodo} projectTitle={'Todolist with JS'} image={jsTodoImage} link={'https://andbudha.github.io/javascript_todolist/'} />
                    <Project description={reactCounter} projectTitle={'Counter with ReactJS'} image={counterImage} />
                    <Project description={reactTodo} projectTitle={'Todolist with ReactJS'} image={reactTodoImage} />
                    <Loader />
                </div>
            </div>
        </div>
    );
};

