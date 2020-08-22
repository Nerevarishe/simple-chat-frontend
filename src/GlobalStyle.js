import { createGlobalStyle } from "styled-components";
import SimpleChatFontEot from "./assets/fonts/simple-chat-app.eot";
import SimpleChatFontTtf from "./assets/fonts/simple-chat-app.ttf";
import SimpleChatFontWoff from "./assets/fonts/simple-chat-app.woff";
import SimpleChatFontSvg from "./assets/fonts/simple-chat-app.svg";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'simple-chat-app';
  src:  url('${SimpleChatFontEot}?jz5ixr');
  src:  url('${SimpleChatFontEot}?jz5ixr#iefix') format('embedded-opentype'),
    url('${SimpleChatFontTtf}?jz5ixr') format('truetype'),
    url('${SimpleChatFontWoff}?jz5ixr') format('woff'),
    url('${SimpleChatFontSvg}?jz5ixr#simple-chat-app') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
  }
  
  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'simple-chat-app' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-chat-icon:before {
    content: "\\e900";
  }
  .icon-chat-list-icon:before {
    content: "\\e901";
  }
  .icon-logout-icon:before {
    content: "\\e902";
  }
  .icon-people-icon:before {
    content: "\\e903";
  }
  .icon-send-button:before {
    content: "\\e905";
  }
  
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  html {
    font-size: 16px;
  }
  
  html, body, #root {
    height: 100vh;
  }
  
  img {
    vertical-align: bottom;
  }
  
  // * {
  //   border: 1px solid #f00 !important;
  // }
  
  @media (min-width: 768px) {
    html {
      font-size: 19px;
    }
  }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    html {
      font-size: 22px;
    }
  }
  
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    html {
      font-size: 24px;
    }
  }
`;

export default GlobalStyle;
