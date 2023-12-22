import TaskList from "@ui/TaskList.tsx";
import {State} from "@store/store.ts";

const CompletedTasks = () => {
    return (
        <div>
            <TaskList filter={State.COMPLETED}/>
        </div>
    );
};

export default CompletedTasks;