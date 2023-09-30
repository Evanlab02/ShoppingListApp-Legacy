export interface DashboardCurrent {
    total: number | null;
    total_price: number | null;
    budget_remaining: number | null;
    average_item_price: number | null;
}

export interface DashboardHistory {
    labels: string[];
    datasets: HistoryDataSet[];
}

interface HistoryDataSet {
    label: string;
    data: number[];
}

export interface RecentItems {
    recent_items: Item[];
}

export interface Item {
    name: string;
    price: number;
}