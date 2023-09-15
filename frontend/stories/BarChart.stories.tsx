import type { Meta, StoryObj } from '@storybook/react';

import BarChart from "../src/components/BarChart/BarChart";

const meta: Meta<typeof BarChart> = {
    component: BarChart,
};

export default meta;

type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
    args: {}
};