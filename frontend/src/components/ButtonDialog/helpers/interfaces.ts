
export interface ButtonDialogProps {
    open: boolean;
    onClose: () => void;
    title: string;
    buttonValues: ButtonProps[];
    text?: string;
}

export interface ButtonProps {
    text: string;
    variant: "text" | "default" | "danger" | "primary" | "success" | "neutral" | "warning";
    onClick: () => void;
}
