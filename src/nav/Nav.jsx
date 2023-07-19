import { Link, animateScroll as scroll } from "react-scroll";
import styles from './Nav.module.scss';


export const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav_container}>
                <Link
                    activeClass={styles.active}
                    to='main'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={styles.active}
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={styles.active}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={styles.active}
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Contact</Link>
            </div>
        </div>
    );
};

