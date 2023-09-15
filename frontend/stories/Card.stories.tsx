import type { Meta, StoryObj } from '@storybook/react';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import Card from "../src/components/Card/Card";


import '@shoelace-style/shoelace/dist/themes/light.css';
import "../src/styles/index.scss";
import "../src/styles/App.scss";
import "../src/styles/Dashboard.scss";

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/');

const meta: Meta<typeof Card> = {
    component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        backgroundColor: '#602786',
        iconBackgroundColor: '#562f6f',
        iconName: 'wallet2',
        mainText: 'Total Spent',
        subText: '$1,000',
        onClick: () => { console.log("clicked") },
    },
};