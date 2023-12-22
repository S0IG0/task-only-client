import {Tab, TabList, TabPanel, Tabs} from "@mui/joy";
import BarChartUI from "@ui/chart/BarChartUI.tsx";

import PieChartUi from "@ui/chart/PieChartUI.tsx";
import RadarChartUi from "@ui/chart/RadarChartUI.tsx";


const charts = [
    {
        name: "Столбачатая диаграмма",
        element: <BarChartUI/>
    },
    {
        name: "Круговая диаграмма",
        element: <PieChartUi/>
    },
    {
        name: "Радар диаграмма",
        element: <RadarChartUi/>
    },
]


const AnalyticPage = () => {


    return (
        <Tabs
            aria-label="Basic tabs"
            defaultValue={0}
            orientation="vertical"
            sx={{
                mt: 2,
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            <TabList>
                {charts.map((chart, index) => (
                    <Tab key={index}>{chart.name}</Tab>
                ))}
            </TabList>
            {charts.map((chart, index) => (
                <TabPanel value={index} key={index}>{chart.element}</TabPanel>
            ))}

        </Tabs>
    );
};

export default AnalyticPage;
