import { makeAutoObservable } from 'mobx'

export default class Task {
    private _id : Number
    _name : String
    _description : String
    _childs: Array<Task> 

    constructor() {
        this._id = 0
        this._name = 'name' 
        this._description = 'description'
        this._childs = []
        makeAutoObservable(this)
    }

    addSubTask = (subTask : Task) => {
        this._childs.push(subTask)
    }

    /* deleteSubTask = (id : Number) => {
        this._childs
    } */
}