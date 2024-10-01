import React from 'react';
import { observer } from 'mobx-react-lite';
import Task from '../task';
import { taskStore } from '../task.store';
import { ReactComponent as Arrow } from '../media/arrow.svg';

interface TaskComponentProps {
    task: Task;
    onSelectTask: (task: Task) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = observer(({ task, onSelectTask }) => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        taskStore.toggleTaskSelection(task, e.target.checked);
    };

    return (
        <div className='flex flex-col min-w-full min-h-10 max-w-fit text-left hover:bg-lb hover:duration-500 duration-500 rounded select-none'>
            <div 
                className='flex gap-2 p-2 cursor-pointer' 
                onClick={() => onSelectTask(task)}
            >
                <Arrow 
                    className={`w-4 h-4 transform ${isExpanded ? 'rotate-90' : ''} duration-300`} 
                    onClick={toggleExpand} 
                />
                <span className='text-base leading-5 font-medium'>{task.name}</span>
                <input 
                    type='checkbox' 
                    className='w-4.5 h-4.5' 
                    checked={task.selected} 
                    onChange={handleCheckboxChange}
                />
            </div>
            {isExpanded && task.childs.length > 0 && (
                <div className='flex flex-col text-sm gap-1'>
                    {task.childs.map(subTask => (
                        <TaskComponent 
                            key={subTask.id} 
                            task={subTask} 
                            onSelectTask={onSelectTask}
                        />
                    ))}
                    <div className='flex w-fit gap-3 border-2 py-1 px-2 rounded box-border cursor-pointer active:bg-lb hover:border-black'>
                        <span>+</span>
                        <span className='font-medium'>Добавить подзадачу</span>
                    </div>
                </div>
            )}
        </div>
    );
});

export default TaskComponent;
