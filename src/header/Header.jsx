import styles from './Header.module.scss'
import { BurgerNav } from '../nav/burgernav/BurgerNav';

export const Header = () => {
    return (
        <div className={`${styles.header}`}>
            {/* <Nav /> */}
            <BurgerNav />
        </div>
    );
};


