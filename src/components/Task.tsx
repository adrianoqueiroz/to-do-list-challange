import styles from './Task.module.css';

import { Circle, Check, Trash } from 'phosphor-react';

interface TaskProps {
  content: string;
  done: boolean;
  onChangeStatusTask: (task: TaskProps) => void;
  onDeleteTask: (task: TaskProps) => void;
}

export function Task(task: TaskProps) {
  function handleDeleteTask() {
    task.onDeleteTask(task);
  }

  function handleChangeStatus() {
    task.onChangeStatusTask(task);
  }

  return (
    <div className={styles.container}>
      <div className={task.done ? styles.taskCompleted : styles.task}>
        <span>
          {task.done 
            ? <Check weight='bold' size={17.45} className={styles.iconCheck} onClick={handleChangeStatus} /> 
            : <Circle weight='bold' size={17.45} className={styles.iconCircle} onClick={handleChangeStatus} />
          }
        </span>
        <p>{task.content}</p>
      </div>
      <Trash size={17} onClick={handleDeleteTask} className={styles.iconTrash} />
    </div>
  )
}