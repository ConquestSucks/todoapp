import { makeAutoObservable } from "mobx";

class FormStore {
    name: string = '';
    description: string = '';
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

    clearFrom() {
        this.name = '';
        this.description = '';
    }
}

export const formStore = new FormStore();