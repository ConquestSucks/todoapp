import { makeAutoObservable } from 'mobx'
import Task from './task'

class TaskStore {
    tasks : Array<Task>
    
    constructor() {
        this.tasks = [
            new Task(0, 'Задача 1', 'Текст 1',
                 
                [ 
                    new Task(1,'Задача 1.1','Текст 1.1',
                        [
                            new Task(5,'Задача 1.1.1','Текст 1.1.1',
                                
                            ),
                        ]
                    ),
                    new Task(2,'Задача 1.2', 'Текст 1.2') ], 
            ),
            new Task(3, 'Задача 2', 'Текст 2',
                 
                [ new Task(4,'Задача 2.2', 'Текст 2.2') ], 
            ),
        ]
        makeAutoObservable(this)
    }

    subtasks = []

    /* addTask = () => {
        this.tasks.push(new Task())
    } */
    
    get getTasks() {
        return this.tasks
    }

    toggleTaskSelection(task: Task, selected: boolean) {
        const updateSelection = (t: Task, selected: boolean) => {
            t.selected = selected;
            t.childs.forEach(child => updateSelection(child, selected));
        };

        updateSelection(task, selected);
    }

    deleteAllTasks = () => {
        this.tasks = []
    }

    deleteSelectedTasks = () => {
        const filterTasks = (taskList: Task[]): Task[] => {
            return taskList
                .filter((task) => !task.selected)
                .map((task) => ({
                    ...task,
                    childs: filterTasks(task.childs)
                }));
        }
        this.tasks = filterTasks(this.tasks)
    }
};

export const taskStore = new TaskStore()