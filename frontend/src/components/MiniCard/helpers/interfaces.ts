/**
 * Interface for MiniCard component
 * 
 * @param backgroundColor: string
 * @param iconBackgroundColor: string
 * @param mainText: string
 * @param subText?: string
 * @param textColor?: string
 * @param iconName?: string
 * @param directLink?: string
 */
export interface MiniCardProps {
    backgroundColor: string;
    iconBackgroundColor: string;
    mainText: string;
    subText?: string;
    textColor?: string;
    iconName?: string;
    directLink?: string;
}