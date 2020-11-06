import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: strgin;
      secondary: strgin;
  
      background: strgin;
      backgroundWhite: string;
      backgroundSecundary: string;
      text: string;
      textWhite: string;
      shadow: string;
    }
  }
}