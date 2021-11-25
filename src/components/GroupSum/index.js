/** @jsxImportSource @emotion/react */

import React from "react";
import PropTypes from "prop-types";

import { styles } from "./styles";

export default function GroupSum({ sum, totalSumType }) {
  return (
    <div css={totalSumType ? styles.totalSumRaw : styles.row}>
      <div css={styles.cell}>
        <p>Group Sum: {sum}</p>
      </div>
    </div>
  );
}

GroupSum.propTypes = {
  sum: PropTypes.string,
  totalSumType: PropTypes.bool,
};
