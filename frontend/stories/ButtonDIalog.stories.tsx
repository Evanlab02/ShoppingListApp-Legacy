import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import ButtonDialog from "../src/components/ButtonDialog/ButtonDialog";
import { ButtonDialogProps } from '../src/components/ButtonDialog/helpers/interfaces';

import '@shoelace-style/shoelace/dist/themes/light.css';
import "../src/styles/index.scss";
import "../src/styles/App.scss";
import "../src/styles/Dashboard.scss";

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/');

const meta: Meta<typeof ButtonDialog> = {
    component: ButtonDialog,
};

export default meta;

type Story = StoryObj<typeof ButtonDialog>;

const DefaultButtonDialog = () => {
    const [open, setOpen] = useState(false);


    const props: ButtonDialogProps = {
        open: open,
        onClose: () => {
            setOpen(false);
        },
        title: "This is a button dialog",
        buttonValues: [
            {
                variant: "primary", text: "Okay", onClick: () => { setOpen(false) },
            }
        ]
    };

    return (
        <div className='content'>
            <button onClick={() => setOpen(true)}>Open Dialog</button>
            <ButtonDialog {...props} />
        </div>
    );
};

export const Default: Story = {
    render: DefaultButtonDialog,
};

