import { createGlobalStyle } from "styled-components";
import Variables from './Variables';
import Fonts from './Fonts';

const Globals = createGlobalStyle`
    ${Variables}
    ${Fonts}

    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }

`;

export default Globals;