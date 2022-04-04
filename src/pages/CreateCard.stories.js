import CreateCard from './CreateCard';

export default {
  title: 'pages/CreateCard',
  component: CreateCard,
  argTypes: { onSubmit: 'onSubmit' },
};

const Template = args => <CreateCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Erstellen',
};
