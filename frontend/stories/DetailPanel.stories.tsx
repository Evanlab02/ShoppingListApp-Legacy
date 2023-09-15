import type { Meta, StoryObj } from '@storybook/react';
import DetailPanel from "../src/components/DetailPanel/DetailPanel";

const meta: Meta<typeof DetailPanel> = {
    component: DetailPanel,
};

export default meta;

export const Default: StoryObj<typeof DetailPanel> = {
    args: {},
};