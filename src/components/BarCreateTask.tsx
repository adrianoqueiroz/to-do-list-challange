import styles from './BarCreateTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  content: string;
  done: boolean;
}

interface BarAddTaskProps {
  onAddNewTask: (newTask: Task) => void;
}

export function BarAddTask({ onAddNewTask }: BarAddTaskProps) {

  const [newTask, setNewTask] = useState({content: '', done: false} as Task);
  
  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
  
    onAddNewTask({...newTask, id: uuidv4()});
    setNewTask({content: '', done: false} as Task);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask({ id: '', content: event.target.value, done: false });
  }

  return (
    <div className="bar-add-task">
      <form className={styles.createTaskForm}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={handleNewTaskChange}
          value={newTask.content}
          required 
        />
        <button onClick={handleAddNewTask} type="submit">
          Criar
          <PlusCircle size={16} weight="bold"/>
        </button>    
      </form>
    </div>
  )
}