import type { Meta, StoryObj } from '@storybook/react';

import ProgressCircle from './ProgressCircle';

const meta = {
  title: 'Atoms/ProgressCircle',
  component: ProgressCircle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    percentage: 85
  },
};