import TaskComponent from '../components/Task';
import Task from '../task'
import { taskStore } from "../task.store"
import { useState } from 'react'
import { ReactComponent as Trash } from '../media/trash.svg'

export default function MainPage() {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isPopupOpen, setIsPopUpOpen] = useState<boolean>(false);

    const openPopup = () => setIsPopUpOpen(true)
    const closePopup = () => setIsPopUpOpen(false)

    const tasks = taskStore.getTasks

    const displayTasks = tasks.map((t) => (
      <TaskComponent
        key={t.id}
        task={t} 
        onSelectTask={setSelectedTask}
      />
    ));

    return (
        <div className='grid grid-cols-2 grid-rows-1 font-rubik'>
            <div className='p-9 flex flex-col gap-2'>
                <div 
                    className='flex justify-end'
                    onClick={openPopup}
                >
                    <Trash 
                        className='border-2 rounded cursor-pointer'
                    />
                    
                </div>
                {displayTasks}
                <div className='p-2 flex items-center gap-3 w-fit border-2 rounded font-medium box-border cursor-pointer active:bg-lb hover:border-black'>
                    <span>+</span>
                    <span>Добавить задачу</span>
                </div>
            </div>
            {isPopupOpen && (
                <div className="absolute h-full w-full flex items-center justify-center">
                    <div className='flex flex-col items-start border-2 border-black rounded p-2 bg-lb gap-2'>
                        <span 
                            className='hover:text-red-500 cursor-pointer hover:duration-300 duration-300'
                            onClick={() => {
                                taskStore.deleteAllTasks()
                                closePopup()
                            }}
                        >
                            Удалить все
                        </span>
                        <span 
                            className='hover:text-orange-400 cursor-pointer hover:duration-300 duration-300'
                        >
                            Удалить выбранное
                        </span>
                        <span className='hover:text-grey cursor-pointer hover:duration-300 duration-300' onClick={closePopup}>Закрыть</span>
                    </div>
                </div>
            )}
            <div className='min-w-half min-h-screen bg-grey'>
                <div className='p-9'>
                    {selectedTask ? (
                        <div className='w-fit flex flex-col items-start	text-lg font-normal gap-5'>
                            <span>{selectedTask.name}</span>
                            <span>{selectedTask.description}</span>
                        </div>
                    ) : (
                        <span>Выберите подзадачу для отображения информации
                            {selectedTask}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}