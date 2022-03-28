import CardList from './CardList';

export default {
  title: 'components/CardList',
  component: CardList,
  argTypes: {},
};

const Template = args => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {};
