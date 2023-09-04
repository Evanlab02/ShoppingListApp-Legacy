import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import "./styles/MiniCard.scss"
import { MiniCardProps } from "./helpers/interfaces";

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