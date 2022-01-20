import {css} from "@emotion/css";

export const root = css`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  align-items: flex-start;
  margin-top: 2rem;
  height: 100%;
  padding: 5%;
`;
