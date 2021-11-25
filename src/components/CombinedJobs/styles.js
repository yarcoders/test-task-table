import { css } from "@emotion/react";
import { colors } from "../generic/colors";

export const styles = {
  container: css`
    width: 100%;
    background-color: ${colors.categoryBackground};
  `,
  titleContainer: css`
    background-color: ${colors.categoryTitleBackground};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-top: 1px solid ${colors.cellBorder};
    h3 {
      margin: 1rem;
      font-size: 1rem;
    }
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
