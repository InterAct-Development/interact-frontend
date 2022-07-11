import { css } from "@emotion/react";
import Variables from './Variables';
import Fonts from './Fonts';

export const theme = css`
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

main {
    padding: 15px 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

section {
    height: 100vh;
}
`;

export default theme;