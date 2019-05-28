import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


  html {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;


  }

  *, *:before, *:after {
      box-sizing: inherit;
    }

  main a {
      text-decoration: none;
   line-height: 1;

   position: relative;
   z-index: 0;
   display: inline-block;
   padding: 5px 5px;
   overflow: hidden;
   color: ${({ theme: { colors } }) => colors.quaternary};
   vertical-align: bottom;
   transition: color .3s ease-out;

   :before {
    content: "";
   position: absolute;
   z-index: -1;
   top: 0;
   left: 0;
   transform: translateY(calc(100% - 8px));
   width: 100%;
   height: 100%;
   background-image: linear-gradient(60deg, ${({ theme: { colors } }) =>
     colors.secondary} 0%,  ${({ theme: { colors } }) => colors.tertiary} 100%);
   transition: transform .25s ease-out;
   }

   :hover {
   color: #fff;
}
:hover::before {
   transform: translateY(0);
   transition: transform .15s ease-out;
}
  }





`;
