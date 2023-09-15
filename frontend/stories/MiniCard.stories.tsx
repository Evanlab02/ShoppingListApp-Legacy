import type { Meta, StoryObj } from '@storybook/react';
import MiniCard from "../src/components/MiniCard/MiniCard";

const meta: Meta<typeof MiniCard> = {
    component: MiniCard,
};

export default meta;

export const Default: StoryObj<typeof MiniCard> = {
    args: {
        backgroundColor: '#602786',
        iconBackgroundColor: '#562f6f',
        iconName: 'wallet2',
        mainText: 'Total Spent',
        subText: '$1,000',
        textColor: '#ffffff',
    },
};
