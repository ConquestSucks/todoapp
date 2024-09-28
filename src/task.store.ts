import { makeAutoObservable } from 'mobx'
import Task, { SubTask } from './task'

class TaskStore {
    tasks : Array<Task>
    constructor() {
        this.tasks = [
            new Task({ id: 0, name: 'Задача 1', description: 'Текст 1',
                childs: 
                [ new SubTask({ id: 1, name: 'Задача 1.1', description:'Текст 1.1'}) ], 
                selected: false }
            ),
            new Task({ id: 1, name: 'Задача 2', description: 'Текст 2',
                childs: 
                [ new SubTask({ id: 1, name: 'Задача 2.1', description:'Текст 2.1'}) ], 
                selected: false }),
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
}

export const taskStore = new TaskStore()