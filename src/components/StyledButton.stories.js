import { StyledButton } from './StyledButton';

export default {
  title: 'components/StyledButton',
  component: StyledButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <StyledButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};

export const Submit = Template.bind({});
Submit.args = {
  children: 'Erstellen',
  variant: 'submit',
};

export const ShowHide = Template.bind({});
ShowHide.args = {
  children: '^',
  variant: 'showHide',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'I am disabled',
  variant: 'disabled',
};

export const NoButton = Template.bind({});
Disabled.args = {
  children: 'I am no Button',
  variant: 'noButton',
};
