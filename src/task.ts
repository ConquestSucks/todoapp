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
}