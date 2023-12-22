import {State} from "@store/taskStore.ts";
import TaskList from "@ui/TaskList.tsx";

const ProcessTasks = () => {
    return (
        <div>
            <TaskList filter={State.PROCESS}/>
        </div>
    );
};

export default ProcessTasks;