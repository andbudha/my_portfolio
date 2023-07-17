import styles from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav_container}>
                <a href="">Main</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
};

