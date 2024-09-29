import Task from '../task'
import { ReactComponent as Arrow } from '../media/arrow.svg'
import React, { useState } from 'react';

interface TaskComponentProps {
    task: Task;
    onSelectTask: (task: Task) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({ task, onSelectTask }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    const toggleExpand = () => setIsExpanded(!isExpanded)

    const displaySubTasks = task.childs.map((t) => (
        <div 
            className='flex gap-2 py-1 px-2 justify-between items-center border-2 rounded hover:border-black hover:duration-300 active:bg-slate-300'
            onClick={() => onSelectTask(t)}
        >
            <span key={t.id} className='min-w-89.5 pl-6'>
                {t.name}
            </span>
            <input type='checkbox' className='w-4.5 h-4.5'></input>
        </div>
    ))

    return (
        <div className='flex flex-col min-w-full min-h-10 max-w-fit text-left hover:bg-lb hover:duration-500 duration-500 rounded select-none'>
            <div 
                className='flex gap-2 p-2 cursor-pointer'
            >
                <Arrow 
                    className={`w-4 h-4 transform ${isExpanded ? 'rotate-90' : ''} duration-300`}
                    onClick={toggleExpand}
                />
                <span className='text-base leading-5 font-medium'>{task.name}</span>
            </div>
            {isExpanded && (
                <div className='flex flex-col text-sm gap-1'>
                    {task.childs.map((st) => (
                        <div className='scale-95'>
                            <TaskComponent
                                key={st.id}
                                task={st}
                                onSelectTask={onSelectTask}    
                            />
                        </div>
                    ))}
                    <div className='flex w-fit gap-3 border-2 py-1 px-2 rounded box-border cursor-pointer active:bg-lb hover:border-black'>
                        <span>+</span>
                        <span className='font-medium'>Добавить подзадачу</span>
                    </div>
                </div>
            )}
        </div>
    )
};

export default TaskComponent;