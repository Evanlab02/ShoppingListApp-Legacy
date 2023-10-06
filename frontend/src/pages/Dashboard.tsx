import { useState, lazy, useEffect } from "react";

import { Grid } from "@mui/material";

import DataRepo from "../api/dataRepository";
import { BarChartProps } from "../components/BarChart/helpers/intefaces";
import { ButtonProps } from "../components/ButtonDialog/helpers/interfaces";
import { DetailPanelProps } from "../components/DetailPanel/helpers/interfaces";
import { DashboardCurrent } from "../helpers/apiInterfaces";
import "../styles/Dashboard.scss";

const BarChart = lazy(() => import("../components/BarChart/BarChart"));
const ButtonDialog = lazy(() => import("../components/ButtonDialog/ButtonDialog"));
const Card = lazy(() => import("../components/Card/Card"));
const DetailPanel = lazy(() => import("../components/DetailPanel/DetailPanel"));
const MiniCard = lazy(() => import("../components/MiniCard/MiniCard"));
const Navbar = lazy(() => import("../components/Navbar/Navbar"));

export default function Dashboard() {
    const [apiToken, setApiToken] = useState<string>("");
    const [cardData, setCardData] = useState<DashboardCurrent>({ total: 0, average_item_price: 0, total_price: 0, budget_remaining: 0 });
    const [chartData, setChartData] = useState<BarChartProps>({ labels: [], datasets: [] });
    const [dataRepo] = useState(new DataRepo());
    const [openItemsDialog, setOpenItemsDialog] = useState(false);
    const [openListDialog, setOpenListDialog] = useState(false);
    const [recentItems, setRecentItems] = useState<DetailPanelProps>({ records: [] });

    useEffect(() => {
        fetchToken();
    }, []);

    useEffect(() => {
        if (apiToken) {
            fetchCardData();
            fetchChartData();
            fetchRecentItems();
        }
    }, [apiToken]);

    const fetchToken = async () => {
        const token = await dataRepo.getToken();
        setApiToken(token);
    };

    const fetchCardData = async () => {
        const data = await dataRepo.getDashboardCurrent(apiToken);
        setCardData(data);
    };

    const fetchRecentItems = async () => {
        const data = await dataRepo.getRecentItems(apiToken);
        setRecentItems({ records: data.recent_items });
    }

    const fetchChartData = async () => {
        const data = await dataRepo.getDashboardHistory(apiToken);

        const newDatasets = data.datasets.map((dataset) => {
            if (dataset.label === "Budget") {
                return {
                    ...dataset,
                    backgroundColor: "#602786",
                }
            } else if (dataset.label === "Price") {
                return {
                    ...dataset,
                    backgroundColor: "#3b5fe2",
                }
            } else {
                return {
                    ...dataset,
                    backgroundColor: "#ffffff",
                }
            }
        });

        setChartData({ labels: data.labels, datasets: newDatasets });
    };

    const itemsDialogButtonValues: ButtonProps[] = [
        {
            text: "View items",
            variant: "primary",
            onClick: () => {
                setOpenItemsDialog(false);
                open("/items/me", "_parent");
            }
        },
        {
            text: "Create item",
            variant: "primary",
            onClick: () => {
                setOpenItemsDialog(false);
                open("/items/create", "_parent");
            }
        },
    ];

    const listsDialogButtonValues: ButtonProps[] = [
        {
            text: "View shopping list",
            variant: "primary",
            onClick: () => {
                setOpenListDialog(false);
                open("/lists", "_parent");
            }
        },
        {
            text: "Add items to shopping list",
            variant: "primary",
            onClick: () => {
                setOpenListDialog(false);
                open("/list/current/add", "_parent");
            }
        },
    ];

    return (
        <>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
            </Grid>

            <ButtonDialog
                open={openItemsDialog}
                onClose={() => { setOpenItemsDialog(false) }}
                title="View or create items"
                text="Would you like to create a new item or view existing items?"
                buttonValues={itemsDialogButtonValues}
            />

            <ButtonDialog
                open={openListDialog}
                onClose={() => { setOpenListDialog(false) }}
                title="View shopping lists or add items to shopping lists"
                text="Would you like to view all your shopping lists or add items to your current shopping list?"
                buttonValues={listsDialogButtonValues}
            />

            <div className="content">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card
                            mainText={`${cardData.total ?? "Shopping list not found"}`}
                            subText="Total items on current shopping list"
                            backgroundColor="#602786"
                            iconBackgroundColor="#562f6f"
                            directLink="/items/me"
                            onClick={() => { setOpenItemsDialog(true) }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card
                            mainText={`R${cardData.total_price ?? 0}`}
                            subText="Price of shopping list"
                            backgroundColor="#3b5fe2"
                            iconBackgroundColor="#2f48a2"
                            iconName="wallet2"
                            directLink="/list/current"
                            onClick={() => { setOpenListDialog(true) }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <MiniCard
                            backgroundColor="#3b5fe2"
                            iconBackgroundColor="#2f48a2"
                            mainText={`R${cardData.budget_remaining ?? 0}`}
                            subText="Budget remaining"
                            iconName="wallet2"
                            directLink="/budgets"
                        />
                        <MiniCard
                            backgroundColor="#ffffff"
                            iconBackgroundColor="#FFC107"
                            mainText={`R${cardData.average_item_price ?? 0}`}
                            subText="Average item price"
                            textColor="#000000"
                            iconName="cash-stack"
                            directLink="/metrics"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <BarChart
                            labels={chartData.labels}
                            datasets={chartData.datasets}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <DetailPanel
                            records={recentItems.records}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}