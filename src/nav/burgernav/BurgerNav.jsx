import { Link, animateScroll as scroll } from "react-scroll";
import styles from './BurgerNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'




export const BurgerNav = () => {
    return (
        <div className={styles.burger_nav}>
            <div className={styles.burger_nav_container}>
                <Link
                    activeClass={styles.active}
                    to='main'
                    spy={true}
                    smooth={true}
                    // offset={0}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={styles.active}
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-94}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={styles.active}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={styles.active}
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-96}
                    duration={500}
                >Contact</Link>
            </div>
            <div className={styles.burger_btn}><FontAwesomeIcon icon={faBars} className={styles.burger} /></div>
        </div>
    );
}