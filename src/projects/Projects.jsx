import styles from './Projects.module.scss'
import { Project } from "./project/Project";
import { Title } from '../components/common/title/Title';
import jsTodoImg from './project_images/jstodo.jpg'
import counterImg from './project_images/counter.jpg'
import reactTodoImg from './project_images/reacttodo.jpg'
import weatherImg from './project_images/weather.png';




export const Projects = () => {

    const jsTodo = 'This is an ordinary todolist wth Java Script. You can add tasks, mark them as done and remove. Follow the link to experience more.';

    const reactWeather = 'A cool app that will let you know about the weather conditions for the searched city. The maximum amount of daily requests cannot exceed 50.';

    const reactTodo = 'This todolist with ReactJS, offers more functionalies in comparison with the first todolist project. You can edit titles, tick off completed tasks, filter through tasks';

    const jsTodoImage = {
        backgroundImage: `url(${jsTodoImg})`
    }

    const weatherImage = {
        backgroundImage: `url(${weatherImg})`
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
                    <Project description={reactTodo} projectTitle={'Todolist with ReactJS'} image={reactTodoImage} link={'https://todo-with-reactjs-psi.vercel.app/'} />
                    <Project description={reactWeather} projectTitle={'WeatherAPP with ReactJS'} image={weatherImage} link={'https://reactjs-weather-q9910ft2n-andbudha.vercel.app'} />
                </div>
            </div>
        </div>
    );
};

