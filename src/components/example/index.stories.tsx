import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExampleComponent, ExampleComponentProps } from '.';

export default {
  title: 'Example',
  component: ExampleComponent,
  parameters: {
    componentSubtitle: 'Component Example',
  },
} as Meta;

export const StoryComponent: Story<ExampleComponentProps> = (args) => (
  <ExampleComponent {...args} text="Hello World" />
);
