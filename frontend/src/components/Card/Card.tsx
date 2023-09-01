import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import "./styles/Card.scss"
import { CardProps } from "./helpers/interfaces";

export default function Card(props: CardProps) {
    const { backgroundColor, iconBackgroundColor, mainText, subText = "", height = "200px", iconName = "shop" } = props;

    return (
        <div className="card" style={{ backgroundColor: backgroundColor, height: height }}>
            <div className="card-icons">
                <div className="left-icon" style={{ backgroundColor: iconBackgroundColor }}>
                    <SlIcon name={iconName} />
                </div>
                <div className="right-icon" style={{ backgroundColor: iconBackgroundColor }}>
                    <SlIcon name="three-dots" />
                </div>
            </div>
            <div className="card-content">
                <h1>{mainText}</h1>
                <h4>{subText}</h4>
            </div>
        </div>
    );
}