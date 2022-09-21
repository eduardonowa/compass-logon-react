import React from "react";

import Inputs from "./Inputs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Project/Components/Inputs",
  component: Inputs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    actions: {
      handles: ["onchange"],
    },
  },
  argTypes: {
    border: {
      control: "color",
    },
    textColor: {
      control: "color",
    },
    radius: {
      control: "number",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Inputs {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
