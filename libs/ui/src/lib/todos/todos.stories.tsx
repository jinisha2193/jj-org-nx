import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Todos } from './todos';

const Story: ComponentMeta<typeof Todos> = {
  component: Todos,
  title: 'Todos',
};
export default Story;

const Template: ComponentStory<typeof Todos> = (args) => <Todos {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
