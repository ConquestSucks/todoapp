import Task from '../components/Task';
import { taskStore } from "../task.store"

export default function MainPage() {
    const tasks = taskStore.getTasks
    const displayTasks = tasks.map((t) => (
      <Task
       task={t} 
      />
    ));

    return (
        <div  className='grid grid-cols-2 grid-rows-1'>
            <div className='p-9'>
                {displayTasks}
            </div>
            <div className='min-w-half min-h-screen bg-grey'>

            </div>
        </div>
    );
}