import { css } from "@emotion/react";

import { colors } from "../generic/colors";

export const styles = {
  row: css`
    padding: 0.6rem;
    background-color: ${colors.groupSumBackground};
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid ${colors.cellBorder};

    p {
      font-size: 0.8rem;
      font-weight: 600;
      margin: 0;
    }
  `,
  cell: css`
    width: 30%;
    margin-right: 1rem;
  `,
  totalSumRaw: css`
    padding: 1rem;
    color: ${colors.totalSumRawText};
    font-weight: 700;
    background-color: ${colors.totalSumRawBackground};
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid ${colors.totalSumRawBorder};
  `,
};
