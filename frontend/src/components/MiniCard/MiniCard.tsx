// Third party imports
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

// File imports
import { MiniCardProps } from "./helpers/interfaces";

// Styles
import "./styles/MiniCard.scss"

/**
 * Mini card component.
 * 
 * @param props 
 * @returns The mini card component.
 */
export default function MiniCard(props: MiniCardProps) {
    const {
        backgroundColor,
        iconBackgroundColor,
        mainText,
        subText = "",
        textColor = "#ffffff",
        iconName = "shop",
        directLink = ""
    } = props;

    return (
        <div className="mini-card" style={{ backgroundColor: backgroundColor, color: textColor }}>
            <a href={directLink}>
                <div className="mini-card-icon" style={{ backgroundColor: iconBackgroundColor }}>
                    <SlIcon name={iconName} />
                </div>
            </a>
            <div className="mini-card-content">
                <p className="value">{mainText}</p>
                <p className="sub-value">{subText}</p>
            </div>
        </div>
    );
}