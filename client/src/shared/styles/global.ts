import { createGlobalStyle } from "styled-components";

import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
   html {
      width: 100vw;
      height: 100vh;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scrollbar-width: thin;
      scrollbar-color: ${theme.colors.neutral[200]} ${theme.colors.neutral[100]};
   }

   /* Works on Chrome, Edge, and Safari */
   *::-webkit-scrollbar {
      width: 12px;
   }

   *::-webkit-scrollbar-track {
      background: ${theme.colors.neutral[100]};
   }

   *::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.neutral[200]} ;
      border-radius: 20px;
      border: 3px solid ${theme.colors.neutral[100]};
   }

   body {
      background: ${theme.colors.neutral[100]};
      font-family: ${theme.fonts.montserrat};
      scrollbar-width: 12px;          /* "auto" or "thin" */
      scrollbar-color: blue orange; 
   }

   button, a {
      cursor: pointer;
   }

   a {
      text-decoration: none;
   }

   img {
      display: block;
      max-width: 100%;
   }

   p {
      color: red;
   }

   @media (max-width: 1080px) {
      html {
         font-size: 93.75%;
      }
   }

   @media (max-width: 720px) {
      html {
         font-size: 87.5%;
      }
   }
`;
