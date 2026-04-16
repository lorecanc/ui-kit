import type { Preview } from '@storybook/react';
import '../src/styles/theme.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'muted', value: '#f8f8f8' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      canvas: {
        layout: 'centered',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isFullscreen = context.parameters?.layout === 'fullscreen';
      if (isFullscreen) {
        return <Story />;
      }
      return (
        <div className="min-h-[100px] flex items-center justify-center p-4">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;