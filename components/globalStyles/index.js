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
    padding: 20px;
    background: #F4F5F7;
    height: 100%;
    font-size: 1rem;
    line-height: 1.5;
    height: 100vh;
    width: 100vw;

     /* Location of the image */
  background-image: url(/static/imgs/bg.jpg);
  
  /* Background image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Background image doesn't tile */
  background-repeat: no-repeat;
  
  /* Background image is fixed in the viewport so that it doesn't move when 
     the content's height is greater than the image's height */
  background-attachment: fixed;
  
  /* This is what makes the background image rescale based
     on the container's size */
  background-size: cover;
  
  /* Set a background color that will be displayed
     while the background image is loading */
  background-color: #464646;

  }

  #__next{
    height: calc(100vh - 40px);
  }

 

  *, *:before, *:after {
      box-sizing: inherit;
    }
  main {
    padding: 10px;
  }
  main a {
      text-decoration: none;
   line-height: 1;

   position: relative;
   z-index: 0;
   display: inline-block;
   padding: 5px 5px;
   overflow: hidden;
   color: ${({ theme: { colors } }) => colors.text};
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
