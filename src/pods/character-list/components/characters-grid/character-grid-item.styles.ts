import {css} from '@emotion/css';

export const fadeInCard = css`
  animation: fadeIn 0.3s;
  -webkit-animation: fadeIn 0.3s;
  -moz-animation: fadeIn 0.3s;
  -o-animation: fadeIn 0.3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const card = css`
  margin: 30px;
  transition: 0.3s;
  background: #3c3e44;
  &:hover {
    background: fade-out(#3c3e44, 0.5%);
  }
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #3c3e44;
`;
