// Third party imports
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

import { BarChartProps } from './helpers/intefaces';

// Styles
import "./styles/BarChart.scss"


// Register the required chart components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

/**
 * Bar chart component.
 * 
 * @returns Bar chart component
 */
export default function BarChart(props: BarChartProps) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Budget and price overview',
            },
        },
    };

    const data = {
        labels: props.labels,
        datasets: props.datasets,
    }


    return (
        <div className="bar-panel">
            <Bar
                options={options}
                data={data}
            />
        </div>
    )
}