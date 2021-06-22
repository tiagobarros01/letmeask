import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      scndBackground: string;

      title: string;
      text: string;

      border: string;

      redGoogle: string,
    };
  }
}
