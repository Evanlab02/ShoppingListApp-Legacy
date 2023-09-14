
/**
 * Interface for the ButtonDialog component
 * 
 * @param open: boolean
 * @param onClose: () => void
 * @param title: string
 * @param buttonValues: ButtonProps[]
 * @param text?: string
 */
export interface ButtonDialogProps {
    open: boolean;
    onClose: () => void;
    title: string;
    buttonValues: ButtonProps[];
    text?: string;
}

/**
 * Interface for the Button component
 * 
 * @param text: string
 * @param variant: "text" | "default" | "danger" | "primary" | "success" | "neutral" | "warning"
 * @param onClick: () => void
 */
export interface ButtonProps {
    text: string;
    variant: "text" | "default" | "danger" | "primary" | "success" | "neutral" | "warning";
    onClick: () => void;
}
