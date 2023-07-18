import styles from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav_container}>
                <a href="#main">Main</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
};

