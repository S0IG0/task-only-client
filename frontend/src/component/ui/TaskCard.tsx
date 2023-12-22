import {Button, ButtonGroup, Card, CardContent, Chip, Divider, Stack, Typography} from "@mui/joy";
import {State, store, Task} from "@store/store.ts";
import {observer} from "mobx-react-lite";
import {Reorder} from "framer-motion";


interface Props {
    task: Task
}

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const color = {
    [State.NOT_STARTED]: "danger",
    [State.PROCESS]: "primary",
    [State.COMPLETED]: "success",
}


const variants = {
    initial: {
        opacity: 0,
        height: 0,
    },
    animate: {
        opacity: 1,
        height: "auto",
    },
    exit: {
        opacity: 0,
        height: 0,
    },
}

const TaskCard = ({task}: Props) => {

    return (
        <Reorder.Item
            as="div"
            value={task}
            id={String(task.id)}
            {...variants}
        >
            <Card
                variant="outlined"
            >
                <div className="card-content-wrapper">
                    <CardContent>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={1}
                        >
                            <Typography level="h1">{task.name}</Typography>
                            {/*@ts-ignore*/}
                            <Chip variant="outlined" size="lg" color={color[task.state]}>
                                {task.state}
                            </Chip>
                        </Stack>
                        <Divider/>
                        {/*@ts-ignore*/}
                        <Typography level="h3">Ожидаемые сроки {task.date.toLocaleDateString('ru-RU', options)}</Typography>
                        <Typography>{task.description}</Typography>
                        <ButtonGroup variant="outlined" aria-label="text button group">
                            <Button
                                color="danger"
                                onClick={() => store.deleteTaskById(task.id)}
                            >
                                Удалить
                            </Button>
                            <Button
                                color="success"
                                disabled={task.state === State.COMPLETED}
                                onClick={() => store.completedTask(task.id)}
                            >
                                Выполнена
                            </Button>
                            <Button
                                color="primary"
                                disabled={task.state === State.PROCESS}
                                onClick={() => store.processTask(task.id)}
                            >
                                В процессе
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </div>
            </Card>
        </Reorder.Item>
    );
};

export default observer(TaskCard);