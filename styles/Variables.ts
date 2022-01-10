import { css } from "@emotion/react";

const Variables = css`
    :root {
        --primaryColor: rgb(44, 85, 232);
        --secondaryColor: rgb(79, 138, 248);

        --border: solid 2px ---primaryColor;
    }
`;

export const breakpoints = {
    sm: 500,
    md: 900,
    lg: 1600,
  } as const


// const Colors= {red:'123123'}

// export type ArdanBreakPointKey = keyof typeof Colors;

// const somefunc = (input:ArdanBreakPointKey) => {return Colors[input]}

export default Variables;