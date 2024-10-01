import Task from '../task'
import { ReactComponent as Arrow } from '../media/arrow.svg'
import React from 'react';
import { taskStore } from '../task.store';
import { observer } from 'mobx-react-lite';
import { formStore } from '../form.store';

interface TaskComponentProps {
    task: Task;
    onSelectTask: (task: Task) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = observer(({ task, onSelectTask }) => {
    const toggleExpand = () => task.revealed = !task.revealed

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        taskStore.toggleTaskSelection(task, e.target.checked)
    }
    return (
        <div className='flex flex-col min-w-full min-h-10 max-w-fit text-left hover:bg-lb hover:duration-500 duration-500 rounded select-none'>
            <div 
                className='flex gap-2 p-2 cursor-pointer'
                onClick={() => onSelectTask(task)}
            >
                <Arrow 
                    className={`w-4 h-4 transform ${task.revealed ? 'rotate-90' : ''} duration-300`}
                    onClick={toggleExpand}
                />
                <span className='text-base leading-5 font-medium'>{task.name}</span>
                <input type='checkbox' className='w-4.5 h-4.5' checked={task.selected} onChange={handleCheckboxChange}></input>
            </div>
            {task.revealed && (
                <div className='flex flex-col text-sm gap-1'>
                    {task.childs.map((subTask) => (
                        <div 
                            className='scale-95'
                            key={subTask.id}
                        >
                            <TaskComponent
                                key={subTask.id}
                                task={subTask}
                                onSelectTask={onSelectTask}
                            />
                        </div>
                    ))}
                    <div className='flex w-fit gap-3 border-2 py-1 px-2 rounded box-border cursor-pointer active:bg-lb hover:border-black'>
                        <span>+</span>
                        <span 
                            className='font-medium'
                            onClick={() => {
                                formStore.isFormOpen = true
                                taskStore.activeParentId = task.id
                            }}
                        >
                            Добавить подзадачу
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
});

export default TaskComponent;