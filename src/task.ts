/* import { makeAutoObservable, observable } from 'mobx' */

interface SubTaskProps {
    id: number;
    name: string;
    description : string;
    selected?: boolean;
}

interface TaskProps extends SubTaskProps{
    revealed?: boolean;
    childs?: SubTask[]
}


export class SubTask {
    id : number;
    name : string;
    description : string;
    selected: boolean;

    constructor({ id, name, description, selected = false } : SubTaskProps) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.selected = selected
    }
}

export class Task {
    id: number;
    name: string;
    description: string;
    revealed: boolean;
    childs: SubTask[];

    constructor({ id, name, description, childs = [], revealed = false} : TaskProps) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.revealed = revealed;
        this.childs = childs
    }

    /* addSubTask = (subTask : Task) => {
        this.childs.push({ subTask: subTask, selected: false })
    } */

    /* deleteSubTask = (id : Number) => {
        this._childs
    } */
}