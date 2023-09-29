import { useState, lazy } from "react";

import { Grid } from "@mui/material";

import { ButtonProps } from "../components/ButtonDialog/helpers/interfaces";

import "../styles/Dashboard.scss";

const BarChart = lazy(() => import("../components/BarChart/BarChart"));
const ButtonDialog = lazy(() => import("../components/ButtonDialog/ButtonDialog"));
const Card = lazy(() => import("../components/Card/Card"));
const DetailPanel = lazy(() => import("../components/DetailPanel/DetailPanel"));
const MiniCard = lazy(() => import("../components/MiniCard/MiniCard"));
const Navbar = lazy(() => import("../components/Navbar/Navbar"));

export default function Dashboard() {
    const [openItemsDialog, setOpenItemsDialog] = useState(false);
    const [openListDialog, setOpenListDialog] = useState(false);

    const itemsDialogButtonValues: ButtonProps[] = [
        {
            text: "View items",
            variant: "primary",
            onClick: () => {
                setOpenItemsDialog(false);
                open("/items", "_parent");
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
                            mainText="1000"
                            subText="Total items on current shopping list"
                            backgroundColor="#602786"
                            iconBackgroundColor="#562f6f"
                            directLink="/items"
                            onClick={() => { setOpenItemsDialog(true) }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card
                            mainText="R1000"
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
                            mainText="R1000"
                            subText="Budget remaining"
                            iconName="wallet2"
                            directLink="/budgets"
                        />
                        <MiniCard
                            backgroundColor="#ffffff"
                            iconBackgroundColor="#FFC107"
                            mainText="R1000"
                            subText="Average item price"
                            textColor="#000000"
                            iconName="cash-stack"
                            directLink="/metrics"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <BarChart />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <DetailPanel />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}