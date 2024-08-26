import styles from './Projects.module.scss';
import { Project } from './project/Project';
import { Title } from '../../common/title/Title';
import jsTodoImg from './project_images/jstodo.jpg';
import pizzaProject from './project_images/pizzas.png';
import reactTodoImg from './project_images/reacttodo.jpg';
import weatherImg from './project_images/weather.png';

export const Projects = () => {
  const jsTodo =
    'This is an ordinary todolist with Java Script. You can add, remove tasks and mark them as done. Follow the link to experience more.';

  const reactWeather =
    'A cool app that will let you know about the weather conditions for the searched city. The maximum amount of daily requests cannot exceed 50.';

  const reactTodo =
    'This todolist with ReactJS, offers more functionalies in comparison with the first todolist project. You can edit titles, tick off completed tasks, filter through tasks';

  const reactPizzaProject =
    'Nice Pizza SPA with ReactJS, TypeScript and RTK. You can search, filter, remove and  add items into your shopping cart. Just give it a try and simulate online shopping.';
  const jsTodoImage = {
    backgroundImage: `url(${jsTodoImg})`,
  };

  const weatherImage = {
    backgroundImage: `url(${weatherImg})`,
  };
  const reactTodoImage = {
    backgroundImage: `url(${reactTodoImg})`,
  };

  const pizzaProjectImage = {
    backgroundImage: `url(${pizzaProject})`,
  };

  return (
    <div className={styles.projects} id={'projects'}>
      <div className={styles.projects_container}>
        <Title title={'My Projects'} />
        <div className={styles.projects_box_container}>
          <Project
            description={reactPizzaProject}
            projectTitle={'React Pizza'}
            image={pizzaProjectImage}
            link={'https://andreis-pizza.vercel.app/'}
          />
          <Project
            description={reactWeather}
            projectTitle={'WeatherAPP with ReactJS'}
            image={weatherImage}
            link={'https://reactjs-weather-40wxpzlc5-andbudha.vercel.app'}
          />
          <Project
            description={jsTodo}
            projectTitle={'Task-manager with JS'}
            image={jsTodoImage}
            link={'https://andbudha.github.io/javascript_todolist/'}
          />
          <Project
            description={reactTodo}
            projectTitle={'Task-manager with ReactJS'}
            image={reactTodoImage}
            link={'https://todo-with-reactjs-psi.vercel.app/'}
          />
        </div>
      </div>
    </div>
  );
};
