import Input from './Input';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: { onSubmit: 'onSubmit' },
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { labelText: 'Label', placeholder: 'placeholder' };

export const Search = Template.bind({});
Search.args = {
  labelText: 'Label',
  placeholder: 'placeholder',
  variant: 'search',
};
