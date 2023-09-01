import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import "./styles/MiniCard.scss"
import { MiniCardProps } from "./helpers/interfaces";

export default function MiniCard(props: MiniCardProps) {
    const { backgroundColor, iconBackgroundColor, mainText, subText = "", textColor = "#ffffff", iconName = "shop"
    } = props;

    return (
        <div className="mini-card" style={{ backgroundColor: backgroundColor, color: textColor }}>
            <div className="mini-card-icon" style={{ backgroundColor: iconBackgroundColor }}>
                <SlIcon name={iconName} />
            </div>
            <div className="mini-card-content">
                <p className="value">{mainText}</p>
                <p className="sub-value">{subText}</p>
            </div>
        </div>
    );
}