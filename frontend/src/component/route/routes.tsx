import {ReactNode} from "react";
import HomePage from "@page/public/HomePage.tsx";
import CompletedTasks from "@page/public/CompletedTasks.tsx";
import NotStartedTasks from "@page/public/NotStartedTasks.tsx";
import ProcessTasks from "@page/public/ProcessTasks.tsx";
import AnalyticPage from "@page/public/AnalyticPage.tsx";

export enum Visibly {
    PUBLIC,
    PUBLIC_HIDDEN,
}


export enum NamePages {
    HOME,
    COMPLETED_TASKS,
    NOT_STARTED_TASKS,
    PROCESS_TASKS,
    ANALYTIC,
}


export interface Page {
    name: string
    path: string
    component: ReactNode
    visibly: Visibly[]
}


export const routes: { [key in NamePages]: Page } = {
    [NamePages.HOME]: {
        name: "Главная",
        path: "/",
        component: <HomePage/>,
        visibly: [Visibly.PUBLIC],
    } as Page,
    [NamePages.COMPLETED_TASKS]: {
        name: "Завершенные задачи",
        path: "/completed-task",
        component: <CompletedTasks/>,
        visibly: [Visibly.PUBLIC],
    } as Page,
    [NamePages.NOT_STARTED_TASKS]: {
        name: "Задачи которые вы не начинали",
        path: "/not-started-task",
        component: <NotStartedTasks/>,
        visibly: [Visibly.PUBLIC],
    } as Page,
    [NamePages.PROCESS_TASKS]: {
        name: "Задачи в процессе",
        path: "/process-task",
        component: <ProcessTasks/>,
        visibly: [Visibly.PUBLIC],
    } as Page,
    [NamePages.ANALYTIC]: {
        name: "Аналитика",
        path: "/analytic",
        component: <AnalyticPage/>,
        visibly: [Visibly.PUBLIC],
    } as Page,
}
