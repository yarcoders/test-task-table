/** @jsxImportSource @emotion/react */
import React from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";
import { genValues } from "../../utils/generic";
import { Icon } from "@iconify/react";

import { styles } from "./styles";

export default function HeaderRow({ handleTitleClick }) {
  const valuesToRender = genValues(null, null, styles);

  const renderRows = function (values) {
    return values.map(({ value, style }) => (
      <div key={uniqid()} css={style}>
        <a href="/#" onClick={handleTitleClick}>
          {value}
          {(value.toLowerCase() === "sum" ||
            value.toLowerCase() === "category" ||
            value.toLowerCase() === "decision") && (
            <Icon icon="carbon:caret-sort" css={styles.icon} />
          )}
        </a>
      </div>
    ));
  };

  return <div css={styles.row}>{renderRows(valuesToRender)}</div>;
}

HeaderRow.propTypes = {
  handleTitleClick: PropTypes.func,
};
