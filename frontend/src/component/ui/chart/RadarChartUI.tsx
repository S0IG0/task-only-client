import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { analyticStore, Event } from "@store/taskStore.ts";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const categories = [
    {
        key: "Создание новой задачи",
        value: "Созданные задачи"
    },
    {
        key: "Удаление задачи",
        value: "Удаленные задачи"
    },
    {
        key: "Завершение задачи",
        value: "Завершенные задачи"
    },
    {
        key: "Начало выполнение задачи",
        value: "Задачи в процессе"
    },
];

export const data = {
    labels: categories.map(category => category.value),
    datasets: [
        {
            label: 'Кол-во',
            data: categories.map(category =>
                analyticStore.getAnalytic(Event.CLICK, category.key).length
            ),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: "Радар-диаграмма сравнения задач",
        },
    },
    scales: {
        r: {
            beginAtZero: true,
        },
    },
};

const RadarChartUi = () => {
    return (
        <Radar
            data={data}
            options={options}
            style={{
                maxWidth: "1000px",
                maxHeight: "600px"
            }}
        />
    );
};

export default RadarChartUi;
