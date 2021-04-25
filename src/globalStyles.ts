import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #00094e;
    color: #363c72;
    font-family: 'Open Sans', sans-serif;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .expense-tracker__container {
    width: 100%;
    max-width: 1120px;
    height: 900px;
  }

  .expenses {
    background-color: #f9fbfe;
    border-radius: 5px;
    width: 100%;
  }
`;