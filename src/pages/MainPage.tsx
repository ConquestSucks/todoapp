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
                    <Trash 
                        className='border-2 rounded cursor-pointer'
                    />
                </div>
                {displayTasks}
                <div className='p-2 flex items-center gap-3 w-fit border-2 rounded font-medium box-border cursor-pointer active:bg-lb hover:border-black'>
                    <span>+</span>
                    <span
                        onClick={() => formStore.isFormOpen = true}
                    >
                        Добавить задачу
                    </span>
                </div>
            </div>
            {taskStore.isDeletePopupOpen && (
                <div className="absolute h-full w-full flex items-center justify-center">
                    <div className='flex flex-col items-start border-2 border-black rounded p-2 bg-lb gap-2'>
                        <span 
                            className='hover:text-red-500 cursor-pointer hover:duration-300 duration-300'
                            onClick={() => {
                                taskStore.deleteAllTasks()
                                togglePopup()
                            }}
                        >
                            Удалить все
                        </span>
                        <span 
                            className='hover:text-orange-400 cursor-pointer hover:duration-300 duration-300'
                            onClick={() => {
                                taskStore.deleteSelectedTasks()
                                togglePopup()
                            }}
                        >
                            Удалить выбранное
                        </span>
                        <span className='hover:text-grey cursor-pointer hover:duration-300 duration-300' onClick={togglePopup}>Закрыть</span>
                    </div>
                </div>
            )}
            {formStore.isFormOpen && (
                <TaskPopup />
            )}
            <div className='min-w-half min-h-screen bg-grey'>
                <div className='p-9'>
                    {taskStore.selectedTask ? (
                        <div className='w-fit flex flex-col items-start	text-lg font-normal gap-5'>
                            <div className='flex h-10 items-center gap-2'>
                                <input 
                                    value={taskStore.selectedTask.name} 
                                    disabled={!taskStore.isEditName} 
                                    onChange={(e) => taskStore.updateTaskField('name', e.target.value)}
                                />
                                <Edit className='w-5 h-5 cursor-pointer' onClick={() => taskStore.toggleEditField('name')}/>
                            </div>
                            <div className='flex h-10 items-center gap-2'>
                                <input 
                                    value={taskStore.selectedTask.description} 
                                    disabled={!taskStore.isEditDescription}
                                    onChange={(e) => taskStore.updateTaskField('description', e.target.value)}
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