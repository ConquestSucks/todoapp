import { Task, SubTask } from '../task'
import { ReactComponent as Arrow } from '../media/arrow.svg'
import { useState } from 'react'

interface TaskComponentProps {
    task: Task;
    onSelectSubTask: (subTask: SubTask) => void;
}

export default function TaskComponent({ task, onSelectSubTask }: TaskComponentProps) {
    const [showSubTasks, setShowSubTasks] = useState<boolean>(false)

    const toggleSubTasks = () => {
        setShowSubTasks(prevState => !prevState )
    }

    const displaySubTasks = task.childs.map((t) => (
        <div 
            className='flex gap-2 py-1 px-2 justify-between items-center border-2 rounded hover:border-black hover: duration-300'
            onClick={() => onSelectSubTask(t)}
        >
            <span key={t.id} className='text-sm min-w-89.5 pl-6'>
                {t.name}
            </span>
            <input type='checkbox' className='w-4.5 h-4.5'></input>
        </div>
    ))
    return (
        <div className='flex flex-col min-w-full min-h-10 max-w-fit text-left hover:bg-lb hover:duration-500 duration-500 rounded'>
            <div className='flex gap-2 p-2'>
                <Arrow 
                    className={`w-4 h-4 transform ${showSubTasks ? 'rotate-90' : ''} duration-300`}
                    onClick={toggleSubTasks} 
                />
                <span className='text-base leading-5 font-medium'>{task.name}</span>
            </div>
            {showSubTasks && (
                <div>
                    {displaySubTasks}
                </div>
            )}
        </div>
    )
}