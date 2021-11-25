/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import uniqid from "uniqid";

import Description from "../Description";
import { categories } from "../../configure";
import { genValues } from "../../utils/generic";

import { styles } from "./styles";

export default function Row({ jobObj, index }) {
  const [descrShown, setDescrShown] = useState(false);

  const toggleDescr = function showOrHideDescription() {
    setDescrShown((prev) => !prev);
  };

  const {
    job: { description },
  } = jobObj;

  const valuesToRender = genValues(jobObj, categories, styles);

  const renderRows = function (values) {
    return values.map(({ value, style }) => (
      <div key={uniqid()} css={style}>
        <p>{value}</p>
      </div>
    ));
  };
  return (
    <>
      <div css={styles.row}>
        <div css={styles.cellIndex}>
          <p>{index}</p>
        </div>
        {renderRows(valuesToRender)}
        {descrShown ? (
          <Icon icon="ci:shrink" css={styles.icon} onClick={toggleDescr} />
        ) : (
          <Icon icon="ci:expand" css={styles.icon} onClick={toggleDescr} />
        )}
      </div>
      {descrShown && <Description descr={description} />}
    </>
  );
}

Row.propTypes = {
  jobObj: PropTypes.object,
  index: PropTypes.number,
};
