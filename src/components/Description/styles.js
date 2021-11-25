import { css } from "@emotion/react";

import { colors } from "../generic/colors";

export const styles = {
  description: css`
    padding: 1rem;
    border-top: 1px solid ${colors.descriptionBorder};
    background-color: ${colors.descriptionBackground};
    animation-duration: 0.5s;
    animation-name: opacityIncrease;

    p {
      font-size: 0.8rem;
      animation-duration: 1s;
      animation-name: opacityIncrease;
    }

    @keyframes opacityIncrease {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes heigthIncrease {
      from {
        height: 0%;
      }
      to {
        height: 100%;
      }
    }
  `,
};
