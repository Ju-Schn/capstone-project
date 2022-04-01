import Card from './Card';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {},
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Are you happy?',
  answer: 'Yes, of course',
};

export const Pinned = Template.bind({});
Pinned.args = {
  question: 'Are you happy?',
  answer: 'Yes, of course',
};
