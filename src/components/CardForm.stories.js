import CardForm from './CardForm';

export default {
  title: 'components/CardForm',
  component: CardForm,
  argTypes: { onSubmit: 'onSubmit' },
};

const Template = args => <CardForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Erstellen',
};
