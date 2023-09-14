
/**
 * Interface for the Card component
 * 
 * @param backgroundColor: string
 * @param iconBackgroundColor: string
 * @param mainText: string
 * @param iconName?: string
 * @param subText?: string
 * @param height?: string
 * @param directLink?: string
 * @param onClick?: () => void
 */
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