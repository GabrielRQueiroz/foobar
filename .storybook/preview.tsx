import React from 'react';
import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon';
import * as NextImage from "next/image";
import '../src/app/globals.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
});

// Initialize MSW
initialize();


const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/ 
			}
		},
		loaders: [mswLoader],
	}
}

export default preview
