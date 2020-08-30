import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider, starPratina, hyerophantoGreen } from "./theme";

//S T Y L I N G 
//Fonts. Include any other format in d.ts
import Kaushan from './font/KaushanScript-Regular.ttf';
import Righteous from './font/Righteous-Regular.ttf';



const GlobalStyle = createGlobalStyle`
  #root > * {
    padding: 20px;
  }

//  body {
 //   background-color: ${props => (props.whiteColor ? props.theme.primaryColor : 'black')};
 // }

 body{
   background-color:${({ theme }) => theme.background};
 }

  #root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  #root > div{
    flex-grow: 1;
  }

  //three parts and navbar 

  @font-face {
    font-family: 'navbarFont';
    src:  url(${Kaushan})  
  }
  
  @font-face {
    font-family: 'MenuItems';
    src:  url(${Righteous})  
  }

  @media screen and (min-width: 550px) {
    .page-headeér ul {
      width: auto;
      margin-top: 0;
    }
  }

  * {
    margin: 0;
    }

  //fragments 
  input, textarea, button {
    border: 1px solid #444;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={hyerophantoGreen}>
      <GlobalStyle whiteColor />
      <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
