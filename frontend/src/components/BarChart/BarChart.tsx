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
export default function BarChart() {
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

    const labels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Budget',
                data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#602786',
            },
            {
                label: 'Price',
                data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 86, 27, 90],
                backgroundColor: '#3b5fe2',
            },
        ],
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