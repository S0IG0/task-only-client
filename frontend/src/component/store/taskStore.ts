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


class TaskStore {
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


export enum Event {
    CLICK,
}

export interface Analytic {
    id: number,
    event: Event,
    title: string,
    description: string,
    date: Date,
}

class AnalyticStore {

    private saveAnalyticsToLocalStorage() {
        localStorage.setItem("analytics", JSON.stringify(this.analytics));
    }

    private loadTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem("analytics");
        if (storedTasks) {
            this.analytics = JSON.parse(storedTasks);
            this.analytics = this.analytics.map(analytic => {
                return {...analytic, date: new Date(analytic.date)}
            })
        }
    }

    constructor() {
        makeAutoObservable(this);
        this.loadTasksFromLocalStorage();

        autorun(() => {
            this.saveAnalyticsToLocalStorage();
        });
    }

    analytics: Analytic[] = [];

    public addAnalytic(
        event: Event,
        title: string,
        description: string,
    ) {
        this.analytics.push(
            {
                id: new Date().getTime(),
                event: event,
                title: title,
                description: description,
                date: new Date()
            }
        )
    }

    public getAnalytic(
        event: Event | undefined,
        title: string | undefined,
    ): Analytic[] {
        let analytics = this.analytics.slice();

        if (event) {
            analytics = analytics.filter(analytic => analytic.event === event);
        }

        if (title) {
            analytics = analytics.filter(analytic => analytic.title === title);
        }

        return analytics
    }
}


export const taskStore = new TaskStore();
export const analyticStore = new AnalyticStore();