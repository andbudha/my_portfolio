import { Link, animateScroll as scroll } from "react-scroll";
import styles from './BurgerNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";




export const BurgerNav = () => {

    const [display, setDisplay] = useState(false);

    const activateBurgerHandler = () => {
        setDisplay(!display);
    }

    return (
        <div className={styles.burger_nav}>
            <div className={display ? `${styles.show_menu}` : `${styles.burger_nav_container}`}>
                <Link
                    onClick={activateBurgerHandler}
                    activeClass={styles.active}
                    to='main'
                    spy={true}
                    smooth={true}
                    // offset={0}
                    duration={500}
                >Main</Link>
                <Link
                    onClick={activateBurgerHandler}
                    activeClass={styles.active}
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >Skills</Link>
                <Link
                    onClick={activateBurgerHandler}
                    activeClass={styles.active}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-51}
                    duration={500}
                >Projects</Link>
                <Link
                    onClick={activateBurgerHandler}
                    activeClass={styles.active}
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-85}
                    duration={500}
                >Contact</Link>
            </div>
            {display ?
                <div onClick={activateBurgerHandler} className={styles.burger_btn}><FontAwesomeIcon icon={faXmark} className={styles.burger} /></div> :
                <div onClick={activateBurgerHandler} className={styles.burger_btn}><FontAwesomeIcon icon={faBars} className={styles.burger} /></div>
            }

        </div>
    );
}