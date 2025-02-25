import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';

import TabsSection, { TabsSectionPanel, TabsSectionTabs } from './TabsSection';

const meta = {
  title: 'Organisms/TabsSection',
  component: TabsSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabsConfig = {
    searchParamKey: 'view',
    tabs: [
    {
        value: 'plans',
        title: 'Plans'
    },
    {
        value: 'goals',
        title: 'Goals'
    }
]};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: (
        <TabsSection>
            <TabsSectionTabs config={tabsConfig} />
            <TabsSectionPanel value='plans'>
                <p>Plans Section</p>
            </TabsSectionPanel>
            <TabsSectionPanel value='goals'>
                <p>Goals Section</p>
            </TabsSectionPanel>
        </TabsSection>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(await canvas.findByText('Plans Section')).toBeVisible();

    await userEvent.click(canvas.getByRole('tab', { name: tabsConfig.tabs[1].title }));
    expect(await canvas.findByText('Goals Section')).toBeVisible();
  }
};
