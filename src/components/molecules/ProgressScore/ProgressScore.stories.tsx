import type { Meta, StoryObj } from '@storybook/react';

import ProgressScore from './ProgressScore';

const meta = {
  title: 'Molecules/ProgressScore',
  component: ProgressScore,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressScore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    progress: 3,
    total: 5
  },
};

export const WithProgressArray: Story = {
    args: {
      progressArray: [true, false, true, false, undefined, undefined]
    },
  };