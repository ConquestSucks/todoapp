import Task from '../task'
import { ReactComponent as Arrow } from '../media/arrow.svg'
import { useState } from 'react'

export default function TaskComponent( { task } : { task: Task } ) {
    const [showSubTasks, setShowSubTasks] = useState(false)

    const toggleSubTasks = () => {
        setShowSubTasks(prevState => !prevState )
    }

    const displaySubTasks = task.childs.map((t) => (
        <span key={t.id} className='text-sm min-w-89.5 pl-6'>
            {t.name}
        </span>
    ))
    return (
        <div className='flex flex-col min-w-full min-h-10 max-w-fit text-left hover:bg-lb hover:duration-500 duration-500'>
            <div className='flex gap-2 p-2'>
                <Arrow 
                    className={`w-4 h-4 transform ${showSubTasks ? 'rotate-90' : ''}`}
                    onClick={toggleSubTasks} 
                />
                <span className='text-base leading-5 font-rubik font-medium'>{task.name}</span>
            </div>
            {showSubTasks && (
                <div className='border-2 rounded hover:border-black'>
                    <div className='flex gap-2 py-1 px-2 justify-between'>
                        {displaySubTasks}
                        <input type='checkbox' className='w-4.5 h-4.5'></input>
                    </div>
                </div>
            )}
        </div>
    )
}