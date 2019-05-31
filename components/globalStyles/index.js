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
  main a {
      text-decoration: none;
   line-height: 1;
   position: relative;
   z-index: 0;
   display: inline-block;
   padding: 5px 5px;
   overflow: hidden;
   color: ${({ theme: { colors } }) => colors.primary};
   vertical-align: bottom;
   transition: color .3s ease-out;

   :before {
    content: "";
   position: absolute;
   z-index: -1;
   top: 0;
   left: 0;
   transform: translateY(calc(100% - 2px));
   width: 100%;
   height: 100%;
   background: ${({ theme: { colors } }) => colors.tertiary};
   transition: transform .25s ease-out;
   }

   :hover {
   color: ${({ theme: { colors } }) => colors.background};
   font-weight: 700;
}
:hover::before {
   transform: translateY(0);
   transition: transform .15s ease-out;
}
  }


h1,h2,h3{
   position: relative;
    z-index: 1;
    margin: 5px 0;
    text-shadow: 2px 2px 0px ${({ theme: { colors } }) =>
      colors.backgroundDark};
        display: table;


    :before {
    position: absolute;
    bottom: 40%;
    z-index: -1;
    width: 100%;
    height: 30%;
    content: '';


    transform: rotate(2deg) skew(40deg)




    }
}

h1:before{
   background: ${({ theme: { colors } }) => colors.primary};

}

h2:before{
   background: ${({ theme: { colors } }) => colors.quaternary};
}

h3:before{
   background: ${({ theme: { colors } }) => colors.secondary};
}








`;
