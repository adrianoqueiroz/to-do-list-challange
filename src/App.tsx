import { Header } from "./components/Header";

import './global.css';

import styles from './App.module.css';
import { BarAddTask } from "./components/BarCreateTask";
import { TaskInfo } from "./components/TaskInfo";
import { Task } from "./components/Task";
import { useState } from "react";

interface Task {
  content: string;
  done: boolean;
}

function App() {

  const [tasks, setTasks] = useState([
    // { content: "Fazer o curso de React", done: false } as Task,
    // { content: "Fazer o curso de TypeScript", done: false } as Task,
    // { content: "Criar layout do app", done: true } as Task,
    // { content: "Incluir elementos na tela", done: true } as Task,
    // { content: "Criar CSS", done: true } as Task,
    { content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", done: true } as Task,
    { content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", done: true } as Task,
    { content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", done: true } as Task,
    { content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", done: true } as Task,
    { content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", done: true } as Task,
    { content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", done: true } as Task,
  ]);

  const [newTask, setNewTask] = useState({} as Task);

  function deleteTask(taskToDelete: Task) {
    setTasks(tasks.filter(task => task.content !== taskToDelete.content));
  }

  function changeStatusTask(taskToChange: Task) {
    setTasks(tasks.map(task => {
      if (task.content === taskToChange.content) {
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

          <div className={styles.taskList}>
            {tasks.length > 0 
              ? tasks.map(task => (
                <Task 
                  key={task.content} 
                  content={task.content} 
                  done={task.done}
                  onDeleteTask={deleteTask}
                  onChangeStatusTask={changeStatusTask}
                />
              ))
              : <p>Nenhuma tarefa criada</p>
            }
          </div>


        </main>
      </div>
    </>
  )
}

export default App
