import { makeAutoObservable } from 'mobx'
import Task from './task'

class TaskStore {
    _tasks : Array<Task>
    constructor() {
        this._tasks = [new Task(), new Task(), new Task()]
        makeAutoObservable(this)
    }
    _subtasks = []

    addTask = () => {
        this._tasks.push(new Task())
    }
    
    get getTasks() {
        return this._tasks
    }
}

export const taskStore = new TaskStore()