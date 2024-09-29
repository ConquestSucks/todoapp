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

    deleteAllTasks = () => {
        this.tasks = []
    }

    /* deleteSelectedTasks = () => {
        this.tasks.filter((t) => t.)
    } */
}

export const taskStore = new TaskStore()