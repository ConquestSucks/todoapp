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
        <div className='flex flex-col gap-1 min-w-full min-h-10 max-w-fit text-left hover:bg-lb hover:duration-500 duration-500 rounded select-none rounded-md'>
            <div
                className='flex gap-2 p-2 justify-between
                        cursor-pointer outline-none rounded-lg w-full hover:outline-custom duration-300 hover:text-custom
                        gap-3 font-medium active:bg-lb select-none'
            >
                <div className='flex gap-2 overflow-hidden'>
                    <Arrow 
                        className={`w-4 h-4 cursor-pointer transform ${task.revealed ? 'rotate-90' : ''} duration-300`}
                        onClick={toggleExpand}
                    />
                    <span 
                        className='text-base text-ellipsis max-h-5 leading-5 font-medium max-w-85 cursor-pointer'
                        onClick={() => onSelectTask(task)}
                    >
                        {task.name}
                    </span>
                </div>
                <input type='checkbox' className='max-w-10 max-h-5 cursor-pointer accent-custom' checked={task.selected} onChange={handleCheckboxChange}></input>
            </div>
            {task.revealed && (
                <div className='flex flex-col text-sm gap-1'>
                    {task.childs.map((subTask) => (
                        <div 
                            className='pl-2'
                            key={subTask.id}
                        >
                            <TaskComponent
                                key={subTask.id}
                                task={subTask}
                                onSelectTask={onSelectTask}
                            />
                        </div>
                    ))}
                    <div 
                        className='cursor-pointer outline-none p-2 rounded-lg w-full hover:outline-custom duration-300 hover:text-custom
                            p-2 flex items-center gap-3 w-fit rounded font-medium active:bg-lb select-none'
                        onClick={() => {
                            formStore.isFormOpen = true
                            taskStore.activeParentId = task.id
                        }}
                    >
                        <span>+</span>
                        <span className='font-medium'>
                            Добавить подзадачу
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
});

export default TaskComponent;