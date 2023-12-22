import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import {analyticStore, Event} from "@store/taskStore.ts";
import {observer} from "mobx-react-lite";

ChartJS.register(ArcElement, Tooltip, Legend);


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


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: "Круговая диаграмма сравнения задач",
        },
    },
};

const PieChartUi = () => {
    const data = {
        labels: categories.map(category => category.value),
        datasets: [
            {
                label: 'Кол-во',
                data: categories.map(category =>
                    analyticStore.getAnalytic(Event.CLICK, category.key).length
                ),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    return (
        <Pie
            data={data}
            options={options}
            style={{
                maxWidth: "1000px",
                maxHeight: "600px"
            }}
        />
    );
};

export default observer(PieChartUi);
