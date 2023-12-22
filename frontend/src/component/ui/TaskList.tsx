import {observer} from "mobx-react-lite";
import {State, taskStore, Task} from "@store/taskStore.ts";
import {Stack} from "@mui/joy";
import TaskCard from "@ui/TaskCard.tsx";
import CenterInformation from "@ui/CenterInformation.tsx";
import {useEffect, useState} from "react";
import {AnimatePresence, Reorder} from "framer-motion";
import {autorun} from "mobx";

enum Filter {
    ALL,
}

type Filters = Filter | State;


interface Props {
    filter?: Filters
}

const TaskList = ({filter = Filter.ALL}: Props) => {

    const [items, setItems] = useState<Task[]>(
        taskStore.tasks.filter(task => {
            if (filter === Filter.ALL) return true;
            return task.state === filter
        })
    );


    useEffect(() => {
        const dispose = autorun(() => {
            setItems(taskStore.tasks.filter(task => {
                if (filter === Filter.ALL) return true;
                return task.state === filter;
            }));
        });

        return () => dispose();
    }, [filter]);

    if (items.length === 0) {
        return (
            <CenterInformation text="Таких задач еще нет"/>
        );
    }



    return (
        <Reorder.Group as="div" axis="y" onReorder={setItems} values={items}>
            <AnimatePresence>
                <Stack sx={{mt: 2}} spacing={2}>
                    {items.map(task => (
                        <TaskCard key={task.id} task={task}/>
                    ))}
                </Stack>
            </AnimatePresence>
        </Reorder.Group>
    );
};

export default observer(TaskList);