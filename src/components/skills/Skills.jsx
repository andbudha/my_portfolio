import styles from './Skills.module.scss';
import { Title } from '../../common/title/Title';
import { ProgressBar } from '../progressbar/ProgressBar';

export const Skills = () => {
  return (
    <div className={styles.skills} id={'skills'}>
      <div className={styles.skills_container}>
        <Title title={'My Skills'} />
        <ProgressBar />
      </div>
    </div>
  );
};
