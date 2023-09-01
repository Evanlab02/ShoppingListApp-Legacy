import { Link } from "react-router-dom";
import { SlIcon, SlIconButton } from "@shoelace-style/shoelace/dist/react";
import "./styles/Navbar.scss";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="main-item navbar-item">
                <Link to={""}><SlIcon name="cart4" />Dashboard</Link>
                <div className="menu-list-button">
                    <SlIconButton name="list" />
                </div>
            </div>
        </header>
    )
}