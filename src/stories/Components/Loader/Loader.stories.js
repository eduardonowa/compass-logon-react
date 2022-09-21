import React from "react";

import Loader from "./Loader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Project/Components/Loader",
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Loader {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
