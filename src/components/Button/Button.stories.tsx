import React from 'react';
import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Button from './Button';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ]
})

export default {
  title: 'button',
  decorators: [withA11y],
};

export const inaccessible = () => (
  <Button message="Inaccessible button"/>
);