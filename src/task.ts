/* import { makeAutoObservable, observable } from 'mobx' */

/* interface SubTaskProps {
    id: number;
    name: string;
    description : string;
    selected?: boolean;
} */

/* interface TaskProps{
    id: number;
    name: string;
    description: string;
    selected: boolean;
    revealed: boolean;
    childs: Task[];
} */


/* export class SubTask {
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
 */
export default class Task {
    id: number;
    name: string;
    description: string;
    selected: boolean;
    revealed: boolean;
    childs: Task[];

    constructor(id: number, name: string, description: string, childs: Task[] = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.selected = false;
        this.revealed = false;
        this.childs = childs
    }

    /* addSubTask = (subTask : Task) => {
        this.childs.push({ subTask: subTask, selected: false })
    } */

    deleteSubTask = (id : number) => {
        this.childs.filter((st) => st.id !== id)
    }
}