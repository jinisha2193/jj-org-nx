import { Todo } from '@jj-org/data';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Todos } from './todos';

const Story: ComponentMeta<typeof Todos> = {
  component: Todos,
  title: 'Todos',
};
export default Story;
const todos: Todo[] = [
  {
    title: 'todo 1',
    status: true,
  },
];

const updateTodoStatus = (todo: Todo) => {
  alert('yay');
};
const addToDO = () => {
  alert('add to do');
};
const Template: ComponentStory<typeof Todos> = (args) => <Todos {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  todos,
  updateTodoStatus,
  addToDO,
};
