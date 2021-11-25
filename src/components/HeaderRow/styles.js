import * as rowStyles from "./../generic/rowStyle";
import { css } from "@emotion/react";
import { colors } from "../generic/colors";

export const styles = {
  ...rowStyles.styles,
  row: css`
    ${rowStyles.styles.row}
    padding-right: 3.8rem;

    a {
      font-size: 0.8rem;
      font-weight: 700;
      text-decoration: none;
      color: ${colors.headerTitles};
    }
  `,
  icon: css`
    color: ${colors.iconColor};

    &:hover {
      color: ${colors.iconColorHovered};
    }
  `,
};
