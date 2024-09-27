import Task from '../task'
import { ReactComponent as Arrow } from '../media/arrow.svg'
interface TaskProps {
    showed: boolean
}

export default function TaskComponent( { task } : { task: Task } ) {
    return (
        <div className='flex gap-2 min-w-full min-h-10 py-2 max-w-fit text-left hover:bg-lb'>
            <Arrow className='w-4 h-4'/>
            <span className='text-base leading-5 font-rubik font-medium'>{task._name}</span>
        </div>
    )
}