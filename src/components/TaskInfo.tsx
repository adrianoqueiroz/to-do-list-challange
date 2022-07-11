import styles from './TaskInfo.module.css';

interface TaskInfoProps {
  title: string;
  created: number;
  done?: number;
}

export function TaskInfo({title, created, done}:TaskInfoProps) {
  return (
    <div className={styles.taskInfo}>
      <p className={done == null ? styles.lightTitle : styles.darkTitle }>
        {title}
      </p>
      <span>{done != null ? done + ' de ' : '' }{created}</span>
    </div>
  )
}