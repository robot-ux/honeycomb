import React from 'react';
import { addParameters } from '@storybook/react';
import { DocsContainer, Title } from '@storybook/addon-docs/blocks';

import { HoneycombThemeProvider } from '../src/modules/themes';
import { GlobalStyles } from '../src/modules/core';

const customViewports = {
  small: {
    name: 'Small Device',
    styles: {
      width: '375px',
      height: '768px',
    },
  },
  medium: {
    name: 'Medium Device',
    styles: {
      width: '768px',
      height: '1080px',
    },
  },
  large: {
    name: 'Large Device',
    styles: {
      width: '1280px',
      height: '1920px',
    },
  },
};

addParameters({
  docs: {
    container: ({ children, context }) => (
      <HoneycombThemeProvider>
        <GlobalStyles />
        <DocsContainer context={context}>
          <Title />
          {children}
        </DocsContainer>
      </HoneycombThemeProvider>
    ),
    page: null,
  },
  viewport: {
    viewports: customViewports,
  },
});

export const decorators = [
  (Story) => (
    <HoneycombThemeProvider>
      <GlobalStyles />
      <Story />
    </HoneycombThemeProvider>
  ),
];
