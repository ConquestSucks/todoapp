import { taskStore } from "../task.store"
import { formStore } from "../form.store"

const TaskPopup = () => {
    return (
        <div className="absolute h-full w-full flex items-center justify-center">
            <div className="flex flex-col items-start border-2 border-black rounded p-2 bg-lb gap-2">
                <input 
                    type="text" 
                    placeholder="Введите название"
                    onChange={(e) => {
                        formStore.name = e.target.value
                    }}
                />
                <input 
                    type="text" 
                    placeholder="Введите описание" 
                    onChange={(e) => {
                        formStore.description = e.target.value
                    }}
                />
                <div className="flex w-full gap-4 justify-center">
                    <span 
                        className="cursor-pointer "
                        onClick={ () => {
                            taskStore.addTask(formStore.name, formStore.description)
                            formStore.isFormOpen = false
                        }}
                    >
                        Добавить
                    </span>
                    <span 
                        className="cursor-pointer "
                        onClick={() => formStore.isFormOpen = false}
                    >
                        Закрыть
                </span>
                </div>
            </div>
        </div>
    )
}

export default TaskPopup