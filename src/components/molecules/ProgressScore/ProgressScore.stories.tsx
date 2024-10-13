import type { Meta, StoryObj } from '@storybook/react';

import ProgressScore from './ProgressScore';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/ProgressScore',
  component: ProgressScore,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
/*   argTypes: {
    backgroundColor: { control: 'color' },
  }, */
} satisfies Meta<typeof ProgressScore>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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