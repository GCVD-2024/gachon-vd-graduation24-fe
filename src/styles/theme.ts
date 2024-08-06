// TO DO : 임시로 작성되었기에, 수정 필요
export const theme = {
  colors: {
    primary: '#FF4B00',
    background: '#000000',
    text: {
      primary: '#FFFFFF',
      secondary: '#FF4B00',
    },
  },
  fonts: {
    main: 'Arial, sans-serif',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '24px',
    xlarge: '48px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  layout: {
    maxWidth: '1200px',
  },
};

export type Theme = typeof theme;
