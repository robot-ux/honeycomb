import { readableColor } from 'polished';

const readable = {
  normal: (bg: string) => readableColor(bg, '#1e2026', '#ffffff'),
  masked: (bg: string) => readableColor(bg, '#76808f', '#5e6673'),
  disabled: (bg: string) => readableColor(bg, '#aeb4bc', '#aeb4bc'),
} as const;

export const GoldDark = {
  honeycomb: {
    color: {
      bg: {
        normal: '#0b0e11',
        masked: '#14151a',
        disabled: '#2b2f36',

        tooltip: {
          normal: '#2b2f36',
          accent: '#33373e',
        },
      },

      text: {
        normal: readable.normal('black'),
        masked: readable.masked('black'),
        disabled: readable.disabled('black'),
      },

      readable,

      border: '#474d57',

      primary: {
        normal: '#f0b90b',
        active: '#f8d12f',
        masked: '#3c2e10',
      },

      success: {
        normal: '#02c076',
        active: '#2ed191',
      },

      danger: {
        normal: '#d9304e',
        active: '#f84960',
      },

      buy: {
        normal: '#02c076',
        active: '#2ed191',
      },

      sell: {
        normal: '#f84960',
        active: '#fc6e75',
      },
    },

    size: {
      small: 12,
      reduced: 14,
      normal: 16,
      increased: 22,
      large: 32,
      huge: 46,
    },

    radius: {
      reduced: 2,
      normal: 4,
    },

    duration: {
      normal: '150ms',
    },
  },
};
