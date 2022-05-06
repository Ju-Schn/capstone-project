import CreateDeckModal from "./CreateDeckModal";

export default {
    title: 'components/CreateDeckModal',
    component: CreateDeckModal,
    argTypes: {},
  };
  
  const Template = args => <CreateDeckModal {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {};