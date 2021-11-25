/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";

import { styles } from "./styles";

export default function Description({ descr }) {
  return (
    <div css={styles.description}>
      <p>{descr}</p>
    </div>
  );
}

Description.propTypes = {
  descr: PropTypes.string,
};
