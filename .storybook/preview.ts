import './global.scss';
import type { Preview } from '@storybook/nextjs';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // screenshot: {
    //   // Глобальные настройки скриншотов (можно переопределить в каждой истории)
    //   fullPage: true,
    //   omitBackground: true,
    //   timeout: 5000,
    // },
  },
};

export default preview;
