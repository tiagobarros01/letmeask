import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      scndBackground: string;
      thirdBackground: string,

      highlight: string;
      answered: string;

      placeholder: string,

      white: string,
      black: string,

      title: string;
      text: string;
      details: string;

      liked: string;

      link: string;
      border: string;

      redGoogle: string,
    };
  }
}
