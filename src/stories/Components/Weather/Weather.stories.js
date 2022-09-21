import React from "react";

import Weather from "./Weather";
import Cloud from "../../../images/cloud.png";
import Cloudy from "../../../images/cloudy.png";
import Raining from "../../../images/raining.png";
import Storm from "../../../images/storm.png";
import Sun from "../../../images/sun.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Project/Components/Weather",
  component: Weather,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: "color",
    },
    image: {
      options: [Cloud, Cloudy, Raining, Storm, Sun],
      control: "select",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Weather {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
