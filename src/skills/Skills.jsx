import styles from './Skills.module.css'
import { Title } from '../components/common/title/Title';
import { ProgressBar } from '../progressbar/ProgressBar';

export const Skills = () => {

    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    return (
        <div className={styles.skills}>
            <div className={styles.skills_container}>
                <Title title={'My Skills'} />
                <ProgressBar />
            </div>
        </div>
    );
};

