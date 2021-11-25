import { css } from "@emotion/react";
import { colors } from "./colors";
export const styles = {
  row: css`
    padding: 0.6rem;
    background-color: ${colors.cellBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${colors.cellBorder};

    p {
      font-size: 0.8rem;
      margin: 0;
    }
  `,
  cell: css`
    width: 10%;
  `,
  cellName: css`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 30%;

    &:first-of-type {
      padding-left: 0;
    }
  `,
  cellIndex: css`
    width: 4%;
    padding-left: 0;
  `,
  icon: css`
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    color: ${colors.iconColor};

    &:hover {
      color: ${colors.iconColorHovered};
    }
  `,
};
