import { FC } from 'react';
import styled from '@emotion/styled';

const GridContainer = styled.section`
    display: grid;
    overflow: hidden;
    margin: auto 0;
    gap: 1.5rem;
    padding: 10px;
`;

const GridItemContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;

interface GridProps {
    columns?: number,
}

// The grid itself. Call if a grid is needed
export const Grid: FC<GridProps> = ({ columns, children }) => {
    return(
        <GridContainer style={{ gridTemplateColumns: `repeat(${columns ?? 1}, 1fr)` }}>
            {children}
        </GridContainer>
    )
} 

// @Wrap elements in a 'GridItem' to insert them as a new column into the grid
// You should use this as a direct child of <Grid />
export const GridItem: FC = ({ children }) => {
    return ( 
        <GridItemContainer>
            {children}
        </GridItemContainer>
        )
}