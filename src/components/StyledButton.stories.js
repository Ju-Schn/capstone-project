import StyledButton from './StyledButton';

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

export const Active = Template.bind({});
Active.args = {
  children: 'I am active',
  variant: 'active',
};

export const Submit = Template.bind({});
Submit.args = {
  children: 'Erstellen',
  variant: 'submit',
};

export const SubmitActive = Template.bind({});
SubmitActive.args = {
  children: 'I am active',
  variant: 'submitActive',
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: 'Click Me',
  variant: 'yellow',
};

export const YellowActive = Template.bind({});
YellowActive.args = {
  children: 'I am active',
  variant: 'yellowActive',
};

export const SubmitSticky = Template.bind({});
Submit.args = {
  children: 'Erstellen',
  variant: 'submitSticky',
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

export const NoButtonPin = Template.bind({});
NoButtonPin.args = {
  children: 'I am no Button',
  variant: 'noButtonPin',
};

export const NoButtonTrash = Template.bind({});
NoButtonTrash.args = {
  children: 'I am no Button',
  variant: 'noButtonTrash',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger',
};

export const DangerActive = Template.bind({});
DangerActive.args = {
  children: 'I am active',
  variant: 'dangerActive',
};

export const Right = Template.bind({});
Right.args = {
  children: '-',
  variant: 'right',
};

export const Wrong = Template.bind({});
Wrong.args = {
  children: '-',
  variant: 'wrong',
};

export const Navigation = Template.bind({});
Navigation.args = {
  children: 'I am navigation',
  variant: 'navigation',
};

export const NavigationActive = Template.bind({});
NavigationActive.args = {
  children: 'I am navigation active',
  variant: 'navigationActive',
};
