import styles from './Title.module.css'

export const Title = (props) => {
    return (
        <div className={styles.title}>
            <h2>{props.title}</h2>
        </div>
    );
}