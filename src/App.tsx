import { Header } from "./components/Header";

import './global.css';

import styles from './App.module.css';
import { BarAddTask } from "./components/BarCreateTask";
import { TaskInfo } from "./components/TaskInfo";
import { Task } from "./components/Task";
import { useState } from "react";

import Clipboard from './assets/Clipboard.svg';

interface Task {
  id: string;
  content: string;
  done: boolean;
}

function App() {

  const [tasks, setTasks] = useState([] as Task[]);

  const [newTask, setNewTask] = useState({} as Task);

  function deleteTask(taskToDelete: Task) {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id));
  }

  function changeStatusTask(taskToChange: Task) {
    setTasks(tasks.map(task => {
      if (task.id === taskToChange.id) {
        return { ...task, done: !task.done };
      }
      return task;
    }))
  };

  function addNewTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  function totalDoneTasks() {
    return tasks.filter(task => task.done).length;
  }


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <BarAddTask onAddNewTask={addNewTask}/>
        <main>
          <header>
            <TaskInfo title="Tarefas Criadas" created={tasks.length} />
            <TaskInfo title="Concluídas" done={totalDoneTasks()} created={tasks.length} />
          </header>

          <div>
            {tasks.length > 0 
              ? tasks.map(task => (
                <Task 
                  key={task.id} 
                  id={task.id}
                  content={task.content} 
                  done={task.done}
                  onDeleteTask={deleteTask}
                  onChangeStatusTask={changeStatusTask}
                />
              ))
              : 
              <div className={styles.emptyTaskList}>
                <img src={Clipboard} alt="Clipboard Icon" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
              
            }
          </div>


        </main>
      </div>
    </>
  )
}

export default App
