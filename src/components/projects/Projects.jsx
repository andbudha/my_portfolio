import styles from './Projects.module.scss';
import { Project } from './project/Project';
import { Title } from '../../common/title/Title';
import blogitImg from './project_images/blogit.png';
import pizzaProjectImg from './project_images/pizzas.png';
import watchitImg from './project_images/watchit.png';

export const Projects = () => {
  const blogIt =
    'This app built with MERN stack allows you to register a new account, login and after post, edit, delete, and view your blog-posts. You can also comment on blogs, posted by others.';

  const reactWeather =
    'This app built with React.js, Typescript and Firebase allows you to register a new account, save movies to or remove movies from your favorite list. You can also comment on various movies.';

  const reactPizzaProject =
    'This app built with ReactJS, TypeScript and RTK allows you to search, filter, remove and add items to your shopping cart. Just give it a try and simulate online shopping.';
  const blogitImage = {
    backgroundImage: `url(${blogitImg})`,
  };

  const watchitImage = {
    backgroundImage: `url(${watchitImg})`,
  };

  const pizzaProjectImage = {
    backgroundImage: `url(${pizzaProjectImg})`,
  };

  return (
    <div className={styles.projects} id={'projects'}>
      <div className={styles.projects_container}>
        <Title title={'My Projects'} />
        <div className={styles.projects_box_container}>
          <Project
            description={blogIt}
            projectTitle={'Blog_It'}
            image={blogitImage}
            link={'https://blog-it-mern-client.vercel.app/'}
          />
          <Project
            description={reactWeather}
            projectTitle={'Watch..It'}
            image={watchitImage}
            link={'https://watch-it-with-react-and-firebase.netlify.app/'}
          />
          <Project
            description={reactPizzaProject}
            projectTitle={'React Pizza'}
            image={pizzaProjectImage}
            link={'https://andreis-pizza.vercel.app/'}
          />
        </div>
      </div>
    </div>
  );
};
