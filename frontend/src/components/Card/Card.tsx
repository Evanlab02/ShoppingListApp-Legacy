// Third party imports
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

// File imports
import { CardProps } from "./helpers/interfaces";

// Styles
import "./styles/Card.scss"

/**
 * Card component.
 * 
 * @param props 
 * @returns The card component.
 */
export default function Card(props: CardProps) {
    const { backgroundColor, iconBackgroundColor, mainText, subText = "", height = "200px", iconName = "shop", directLink = "", onClick } = props;

    return (
        <div className="card" style={{ backgroundColor: backgroundColor, height: height }}>
            <div className="card-icons">
                <a href={directLink}>
                    <div className="left-icon" style={{ backgroundColor: iconBackgroundColor }}>
                        <SlIcon name={iconName} />
                    </div>
                </a>
                <div className="right-icon"
                    style={{ backgroundColor: iconBackgroundColor }}
                    onClick={() => { if (onClick) { onClick() } }}
                >
                    <SlIcon name="three-dots" />
                </div>
            </div>
            <div className="card-content">
                <h1>{mainText}</h1>
                <h4>{subText}</h4>
            </div>
        </div >
    );
}