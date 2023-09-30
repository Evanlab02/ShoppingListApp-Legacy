import { DashboardCurrent, DashboardHistory, RecentItems } from "../helpers/apiInterfaces";

export default class DataRepo {
    contentType = "";

    constructor() {
        this.contentType = "application/json";
    }

    async getToken(): Promise<string> {
        const response = await fetch("/api/auth/token",
            {
                method: "GET",
                headers: {
                    "Content-Type": this.contentType,
                    "Accept": "application/json"
                }
            }
        );

        if (response.ok) {
            const data = await response.json();
            return data.message;
        } else {
            return "";
        }
    }

    async getDashboardCurrent(token: string): Promise<DashboardCurrent> {
        const response = await fetch("/api/dashboard/current",
            {
                method: "GET",
                headers: {
                    "Content-Type": this.contentType,
                    "Accept": "application/json",
                    "X-API-Key": token
                }
            }
        );


        const data = await response.json();
        return data;
    }

    async getDashboardHistory(token: string): Promise<DashboardHistory> {
        const response = await fetch("/api/dashboard/history",
            {
                method: "GET",
                headers: {
                    "Content-Type": this.contentType,
                    "Accept": "application/json",
                    "X-API-Key": token
                }
            }
        );

        const data = await response.json();
        return data;
    }

    async getRecentItems(token: string): Promise<RecentItems> {
        const response = await fetch("/api/dashboard/recent",
            {
                method: "GET",
                headers: {
                    "Content-Type": this.contentType,
                    "Accept": "application/json",
                    "X-API-Key": token
                }
            }
        );

        const data = await response.json();
        return data;
    }
}