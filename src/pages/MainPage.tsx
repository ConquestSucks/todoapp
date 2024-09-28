import TaskItem from '../components/Task';
import { SubTask } from '../task'
import { taskStore } from "../task.store"
import { useState } from 'react'

export default function MainPage() {
    const [selectedSubTask, setSelectedSubTask] = useState<SubTask | null>(null);
    const tasks = taskStore.getTasks

    const displayTasks = tasks.map((t) => (
      <TaskItem
        key={t.id}
        task={t} 
        onSelectSubTask={setSelectedSubTask}
      />
    ));

    return (
        <div className='grid grid-cols-2 grid-rows-1 font-rubik'>
            <div className='p-9'>
                {displayTasks}
            </div>
            <div className='min-w-half min-h-screen bg-grey'>
                <div className='p-9'>
                    {selectedSubTask ? (
                        <div className='w-fit flex flex-col items-start	text-lg font-normal gap-5'>
                            <span>{selectedSubTask.name}</span>
                            <span>{selectedSubTask.description}</span>
                        </div>
                    ) : (
                        <span>Выберите подзадачу для отображения информации</span>
                    )}
                </div>
            </div>
        </div>
    );
}