import { Grid } from "@mui/material";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Dashboard.scss";
import MiniCard from "../components/MiniCard/MiniCard";


export default function Dashboard() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
            </Grid>
            <div className="content">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card
                            mainText="1000"
                            subText="Total Items"
                            backgroundColor="#602786"
                            iconBackgroundColor="#562f6f"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card
                            mainText="R1000"
                            subText="Price Of Current Shopping List"
                            backgroundColor="#3b5fe2"
                            iconBackgroundColor="#2f48a2"
                            iconName="wallet2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <MiniCard
                            backgroundColor="#3b5fe2"
                            iconBackgroundColor="#2f48a2"
                            mainText="R1000"
                            subText="Budget Remaining"
                            iconName="wallet2"
                        />
                        <MiniCard
                            backgroundColor="#ffffff"
                            iconBackgroundColor="#FFC107"
                            mainText="R1000"
                            subText="Average Item Price"
                            textColor="#000000"
                            iconName="cash-stack"
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}