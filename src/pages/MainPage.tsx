import TaskItem from '../components/Task';
import { taskStore } from "../task.store"

export default function MainPage() {
    const tasks = taskStore.getTasks
    const displayTasks = tasks.map((t) => (
      <TaskItem
        key={t.id}
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