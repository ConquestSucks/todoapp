import { makeAutoObservable } from "mobx";

class FormStore {
    name: string = 'Новая задача';
    description: string = 'Описание задачи';
    isFormOpen: boolean = false;

    constructor() {
        makeAutoObservable(this)
    };

    setName(value: string) {
        this.name = value
    }

    setDescription(value: string) {
        this.description = value
    }

    clearForm() {
        this.name = 'Новая задача';
        this.description = 'Описание задачи';
    }
}

export const formStore = new FormStore();