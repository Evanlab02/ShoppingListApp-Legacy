export interface BarChartProps {
    labels: string[];
    datasets: BarChartDataSet[];
}

interface BarChartDataSet {
    label: string;
    data: number[];
    backgroundColor: string;
}
