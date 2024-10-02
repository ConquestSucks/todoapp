import TaskComponent from '../components/Task';
import { observer } from 'mobx-react-lite';
import { taskStore } from "../task.store"
import { formStore } from '../form.store';
import { ReactComponent as Trash } from '../media/trash.svg'
import { ReactComponent as Edit } from '../media/edit.svg'
import TaskPopup from '../components/TaskPopup';

const MainPage = () => {
    const togglePopup = () => taskStore.isDeletePopupOpen = !taskStore.isDeletePopupOpen

    const displayTasks = taskStore.getTasks.map((t) => (
      <TaskComponent
        key={t.id}
        task={t} 
        onSelectTask={taskStore.setSelectedTask.bind(taskStore)}
      />
    ));

    return (
        <div className='grid grid-cols-2 grid-rows-1 font-rubik'>
            <div className='p-9 flex flex-col gap-2'>
                <div 
                    className='flex justify-end'
                    onClick={togglePopup}
                >
                    <div className='p-1'>
                        <Trash 
                            className='cursor-pointer'
                        />
                    </div>
                </div>
                {displayTasks}
                <div 
                    className='cursor-pointer outline-none p-2 rounded-lg w-full hover:outline-custom duration-300 hover:text-custom
                        p-2 flex items-center gap-3 w-fit rounded font-medium active:bg-lb select-none active:bg-lb hover:bg-lb'
                    onClick={() => formStore.isFormOpen = true}    
                >
                    <span>+</span>
                    <span className=''>
                        Добавить задачу
                    </span>
                </div>
            </div>
            {taskStore.isDeletePopupOpen && (
                <div className="absolute h-full w-full flex items-center justify-center select-none">
                    <div className='flex flex-col items-start border-2 border-black rounded-md p-4 bg-lb gap-3 text-left border-inherit'>
                        <span 
                            className='cursor-pointer outline-none p-2 rounded-lg w-full hover:outline-custom active:outline-custom duration-300 hover:text-custom'
                            onClick={() => {
                                taskStore.deleteAllTasks()
                                togglePopup()
                            }}
                        >
                            Удалить все
                        </span>
                        <span 
                            className='cursor-pointer outline-none p-2 rounded-lg w-full hover:outline-custom duration-300 hover:text-custom'
                            onClick={() => {
                                taskStore.deleteSelectedTasks()
                                togglePopup()
                            }}
                        >
                            Удалить выбранное
                        </span>
                        <span 
                            className='cursor-pointer outline-none p-2 rounded-lg w-full hover:outline-custom duration-300 hover:text-custom'
                            onClick={togglePopup}
                        >
                            Закрыть
                        </span>
                    </div>
                </div>
            )}
            {formStore.isFormOpen && (
                <TaskPopup />
            )}
            <div className='min-w-half min-h-screen bg-grey'>
                <div className='p-9'>
                    {taskStore.selectedTask ? (
                        <div className='flex flex-col items-start text-lg font-normal gap-5'>
                            <div className='flex h-10 items-center gap-2 w-full'>
                                <input 
                                    value={taskStore.selectedTask.name} 
                                    disabled={!taskStore.isEditName} 
                                    onChange={(e) => taskStore.updateTaskField('name', e.target.value)}
                                    className='rounded box-border outline-none p-2 max-w-85 h-85'
                                />
                                <Edit className='w-5 h-5 cursor-pointer' onClick={() => taskStore.toggleEditField('name')}/>
                            </div>
                            <div className='flex h-10 items-center gap-2 w-full'>
                                <input 
                                    value={taskStore.selectedTask.description} 
                                    disabled={!taskStore.isEditDescription}
                                    onChange={(e) => taskStore.updateTaskField('description', e.target.value)}
                                    className='rounded box-border outline-none p-2 max-w-85 h-85'
                                />
                                <Edit className='w-5 h-5 cursor-pointer' onClick={() => taskStore.toggleEditField('description')}/>
                            </div>
                        </div>
                    ) : (
                        <span>Выберите подзадачу для отображения информации</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default observer(MainPage);