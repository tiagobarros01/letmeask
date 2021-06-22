import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      scndBackground: string;

      title: string;
      text: string;
      details: string;

      link: string;
      border: string;

      redGoogle: string,
    };
  }
}
