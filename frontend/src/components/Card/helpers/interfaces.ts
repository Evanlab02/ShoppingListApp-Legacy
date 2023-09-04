export interface CardProps {
    backgroundColor: string;
    iconBackgroundColor: string;
    mainText: string;
    iconName?: string;
    subText?: string;
    height?: string;
    directLink?: string;
    onClick?: () => void;
}