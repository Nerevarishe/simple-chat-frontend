import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'simple-chat-app';
  src:  url('fonts/simple-chat-app.eot?jz5ixr');
  src:  url('fonts/simple-chat-app.eot?jz5ixr#iefix') format('embedded-opentype'),
    url('./assets/fonts/simple-chat-app.ttf?jz5ixr') format('truetype'),
    url('./assets/fonts/simple-chat-app.woff?jz5ixr') format('woff'),
    url('./assets/fonts/simple-chat-app.svg?jz5ixr#simple-chat-app') format('svg');
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
    color: #fff;
  }
  .icon-chat-list-icon:before {
    content: "\\e901";
    color: #fff;
  }
  .icon-logout-icon:before {
    content: "\\e902";
    color: #fff;
  }
  .icon-people-icon:before {
    content: "\\e903";
    color: #fff;
  }
  .icon-send-button:before {
    content: "\\e905";
  }
  
  html {
  box-sizing: border-box;
  font-size: 16px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  img {
    vertical-align: bottom;
  }
  
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