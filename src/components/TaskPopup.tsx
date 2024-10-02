import { taskStore } from "../task.store"
import { formStore } from "../form.store"

const TaskPopup = () => {
    return (
        <div className="absolute h-full w-full flex items-center justify-center">
            <div className="flex flex-col items-start border-2 border-black rounded-md p-2 bg-lb gap-3 border-inherit">
                <input 
                    type="text" 
                    placeholder="Введите название"
                    onChange={(e) => {
                        formStore.name = e.target.value
                    }}
                    className='hover:placeholder:text-custom rounded box-border outline-none p-1 pl-2 box-border outline rounded-lg w-full hover:outline-custom duration-300 hover:text-custom'

                />
                <input 
                    type="text" 
                    placeholder="Введите описание" 
                    onChange={(e) => {
                        formStore.description = e.target.value
                    }}
                    className='hover:placeholder:text-custom rounded box-border outline-none p-1 pl-2 box-border outline rounded-lg w-full hover:outline-custom duration-300 hover:text-custom'
                />
                <div className="flex w-full gap-4 justify-center  select-none">
                    <span 
                        className="cursor-pointer outline-none p-2 rounded-lg w-full hover:outline-custom duration-300 hover:text-custom active:text-custom active:outline-custom"
                        onClick={ () => {
                            taskStore.addTask(formStore.name, formStore.description)
                            formStore.isFormOpen = false
                            formStore.clearForm()
                        }}
                    >
                        Добавить
                    </span>
                    <span 
                        className="cursor-pointer outline-none p-2 rounded-lg w-full hover:outline-custom duration-300 hover:text-custom active:text-custom active:outline-custom"
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