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

export default Variables;