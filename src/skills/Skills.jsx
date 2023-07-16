import styles from './Skills.module.css'
import { Title } from '../components/common/title/Title';
import { ProgressBar } from '../progressbar/ProgressBar';

export const Skills = () => {

    return (
        <div className={styles.skills}>
            <div className={styles.skills_container}>
                <Title title={'My Skills'} />
                <ProgressBar />
            </div>
        </div>
    );
};

