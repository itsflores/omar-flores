import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html {
    height: 100%
  }

  #root {
    height: 100%
  }

  .gravitate {
    transform: translateY(-32px);
  }

  .animated {
    transition: transform 400ms ease;
  }

  @keyframes gravitate {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-32px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    @keyframes float-down {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(8px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    .animate1 {
      animation: gravitate 8s ease infinite;
    }

    .animate2 {
      animation: float-down 12s ease infinite;
    }
`;
