import {State} from "@store/taskStore.ts";
import TaskList from "@ui/TaskList.tsx";

const NotStartedTasks = () => {
    return (
        <div>
            <TaskList filter={State.NOT_STARTED}/>
        </div>
    );
};

export default NotStartedTasks;