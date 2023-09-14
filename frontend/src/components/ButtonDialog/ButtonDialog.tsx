// Third party imports
import { SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';

// File imports
import { ButtonDialogProps } from './helpers/interfaces';

/**
 * Button dialog component.
 * 
 * @param props Button dialog props
 * @returns Button dialog component
 */
export default function ButtonDialog(props: ButtonDialogProps) {
    const { onClose, open, title, text = "", buttonValues } = props;

    return (
        <>
            <SlDialog label={title} open={open} onSlAfterHide={onClose}>
                <p>{text}</p>
                <SlButton slot="footer" variant="danger" onClick={onClose}>
                    Close
                </SlButton>
                <>
                    {buttonValues.map((buttonValue, index) => {
                        return (
                            <SlButton
                                key={index}
                                slot="footer"
                                variant={buttonValue.variant}
                                onClick={buttonValue.onClick}
                            >
                                {buttonValue.text}
                            </SlButton>
                        );
                    })}
                </>
            </SlDialog >
        </>
    );
}
