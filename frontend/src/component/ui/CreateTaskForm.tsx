import {Button, FormControl, FormLabel, Input, Stack, Textarea} from "@mui/joy";
import React, {useState} from "react";
import {analyticStore, Event, State, Task, taskStore} from "@store/taskStore.ts";

interface Props {
    onSubmit: () => void
}

const CreateTaskForm = ({onSubmit}: Props) => {

    const [task, setTask] = useState<Task>({
        id: new Date().getTime(),
        name: "",
        description: "",
        date: new Date(),
        state: State.NOT_STARTED,
    })

    return (
        <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                onSubmit();
                taskStore.addTask(task);
                analyticStore.addAnalytic(
                    Event.CLICK,
                    "Создание новой задачи",
                    "Пользователь корректно указал данные и создал новую задачу",
                )
            }}
        >
            <Stack spacing={2}>
                <FormControl>
                    <FormLabel>Название</FormLabel>
                    <Input value={task.name} onChange={event => setTask({...task, name: event.target.value})} required/>
                </FormControl>
                <FormControl>
                    <FormLabel>Описание</FormLabel>
                    <Textarea value={task.description}
                              onChange={event => setTask({...task, description: event.target.value})} minRows={3}
                              required/>
                </FormControl>
                <FormControl>
                    <FormLabel>Дата выполнения</FormLabel>
                    <Input type="date" onChange={event => setTask({...task, date: new Date(event.target.value)})}
                           required/>
                </FormControl>
                <Button type="submit" variant="outlined">Создать задачу</Button>
            </Stack>
        </form>
    );
};

export default CreateTaskForm;