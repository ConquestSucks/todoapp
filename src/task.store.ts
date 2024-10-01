import { makeAutoObservable, autorun } from 'mobx';
import Task from './task';

class TaskStore {
    tasks : Array<Task> = [];
    activeParentId : number = -1;
    isEditName : boolean = false;
    isEditDescription : boolean = false;
    
    constructor() {
        makeAutoObservable(this);

        const savedTasks = localStorage.getItem('tasks');

        if(savedTasks) {
            this.tasks = JSON.parse(savedTasks);
        }

        autorun(()=> {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        })
    }   

    findTaskById(id: number): Task | undefined {
        const searchTask = (taskList: Task[]): Task | undefined => {
            for (const task of taskList) {
                if (task.id === id) {
                    return task;
                }
                const foundInChilds = searchTask(task.childs);
                if (foundInChilds) {
                    return foundInChilds;
                }
            }
            return undefined;
        };

        return searchTask(this.tasks);
    }

    addTask(name: string, description: string) {
        const parentTask = this.findTaskById(this.activeParentId);
        if (this.activeParentId && parentTask) {
            parentTask.childs.push(new Task(Math.random() * 5, name, description));
        } else {
            this.tasks.push(new Task(Math.random() * 5, name, description));
        }
    }
    
    get getTasks() {
        return this.tasks;
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