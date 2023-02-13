import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: inherit;
    }
    body {
        font-family: 'GmarketSansMedium';
    }
    .app-wrap {
    position: relative;
    max-width: 900px;
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    }

    .wrap {
    width: 100%;
    height: calc(100vh - 50px);
    height: calc((var(--vh, 1vh) * 100) - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    }
`

export default GlobalStyle;