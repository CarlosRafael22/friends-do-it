import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Modal from './Modal';

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClose: fn(), onSubmit: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Add New plan',
    submitText: 'Add plan',
    children: <p>Modal body</p>
  },
};