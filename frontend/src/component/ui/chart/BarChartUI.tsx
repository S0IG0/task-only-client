

import {Bar} from "react-chartjs-2";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js';
import {analyticStore, Event} from "@store/taskStore.ts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
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
]

const data = {
    labels: ['Типы задач'],
    datasets: categories.map((category, index) => ({
        label: category.value,
        data: [analyticStore.getAnalytic(Event.CLICK, category.key).length],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(153, 102, 255, 0.5)',
        ][index],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(153, 102, 255, 1)',
        ][index],
        borderWidth: 2,
        hidden: false,
    })),
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: "Столбчатая диаграмма сравнения задач",
        },
    },
};


const BarChartUI = () => {
    return (
        <Bar
            style={{
                maxWidth: "1000px",
                maxHeight: "600px"
            }}
            options={options}
            data={data}
        />
    );
};

export default BarChartUI;