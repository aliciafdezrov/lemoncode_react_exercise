import { css } from '@emotion/css';

export const gridContainer = css`
  @media (min-width: 360px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 360px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  align-items: start;
  margin-bottom: 5rem;
  background: #24282f;
`;
