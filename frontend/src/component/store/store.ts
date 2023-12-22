import {autorun, makeAutoObservable} from "mobx";

export enum State {
    NOT_STARTED = "Не начата",
    PROCESS = "В процессе",
    COMPLETED = "Выполнено",
}

export interface Task {
    id: number,
    name: string,
    description: string,
    date: Date,
    state: State
}


class Store {
    tasks: Task[] = [];

    private saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    private loadTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
            this.tasks = this.tasks.map(task => {
                return {...task, date: new Date(task.date)}
            })
        }
    }


    constructor() {
        makeAutoObservable(this)
        this.loadTasksFromLocalStorage();

        autorun(() => {
            this.saveTasksToLocalStorage();
        });
    }


    addTask(task: Task) {
        this.tasks.push(task);
    }

    setTasks(tasks: Task[]) {
        this.tasks = tasks;
    }

    deleteTaskById(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    private setStateTask(id: number, state: State) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) return


        this.tasks[index].state = state;
    }

    completedTask(id: number) {
        this.setStateTask(id, State.COMPLETED);
    }

    processTask(id: number) {
        this.setStateTask(id, State.PROCESS);
    }
}


export const store = new Store();