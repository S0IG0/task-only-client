import React from "react";
import {
    Button,
    DialogTitle,
    Modal,
    ModalDialog,

} from "@mui/joy";
import CreateTaskForm from "@ui/CreateTaskForm.tsx";
import TaskList from "@ui/TaskList.tsx";

const HomePage = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <div>
            <Button
                sx={{
                    mt: 2,
                }}
                variant="outlined"
                color="success"
                onClick={() => setOpen(true)}
            >
                Создать новую задачу
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Создайте новую задачу прямой сейчас!</DialogTitle>
                    <CreateTaskForm onSubmit={() => setOpen(false)}/>
                </ModalDialog>
            </Modal>

            <TaskList/>
        </div>
    );
};

export default HomePage;