// Third party imports
import { Link } from "react-router-dom";
import { SlIcon, SlIconButton } from "@shoelace-style/shoelace/dist/react";

// Styles
import "./styles/Navbar.scss";

/**
 * Navbar component.
 * 
 * @returns The navbar component.
 */
export default function Navbar() {
    return (
        <header className="navbar">
            <div className="main-item navbar-item">
                <Link to={""}><SlIcon name="cart4" />Dashboard</Link>
                <div className="menu-list-button">
                    <SlIconButton name="list" />
                </div>
                <div className="menu-list-button">
                    <SlIconButton name="door-open"
                        onClick={() => {
                            window.location.href = "/logout";
                        }}
                    />
                </div>
            </div>
        </header>
    )
}