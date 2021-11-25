/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";
import {
  reduceJobs,
  calcTotalSum,
  moneyFormat,
  sortSum,
  sortStr,
} from "../../utils/generic";

import Row from "../Row";
import GroupSum from "../GroupSum";
import HeaderRow from "./../HeaderRow";
import { categories } from "../../configure";

import { styles } from "./styles";

export default function CombinedJobs({ sameJobsArr, groupNumber }) {
  const uniqJobsByName = reduceJobs(sameJobsArr, categories);
  const totalSum = calcTotalSum(uniqJobsByName);
  const totalSumMoneyFormat = moneyFormat(totalSum);

  const [jobs, setJobs] = useState(uniqJobsByName);
  const [decisionSortAsc, setDecisionSortAsc] = useState(true);
  const [categorySortAsc, setCategorySortAsc] = useState(true);
  const [sumSortAsc, setSumSortAsc] = useState(true);

  const handleTitleClick = (e) => {
    e.preventDefault();
    if (!e.target) return;
    if (uniqJobsByName.length === 1) return;

    const columnName = e.target.innerText
      ? e.target.innerText.toLowerCase()
      : e.target.closest("a").innerText.toLowerCase();

    if (columnName === "decision" && decisionSortAsc) {
      setJobs((prev) => {
        return [...prev.sort((a, b) => sortStr(a.dec_id, b.dec_id, true))];
      });

      setDecisionSortAsc((prev) => !prev);
    }

    if (columnName === "decision" && !decisionSortAsc) {
      setJobs((prev) => {
        return [...prev.sort((a, b) => sortStr(a.dec_id, b.dec_id, false))];
      });

      setDecisionSortAsc((prev) => !prev);
    }

    if (columnName === "category" && categorySortAsc) {
      setJobs((prev) => {
        return [
          ...prev.sort((a, b) => sortStr(a.categoryName, b.categoryName, true)),
        ];
      });

      setCategorySortAsc((prev) => !prev);
    }

    if (columnName === "category" && !categorySortAsc) {
      setJobs((prev) => {
        return [
          ...prev.sort((a, b) =>
            sortStr(a.categoryName, b.categoryName, false)
          ),
        ];
      });

      setCategorySortAsc((prev) => !prev);
    }

    if (columnName === "sum" && sumSortAsc) {
      setJobs((prev) => {
        return [...prev.sort((a, b) => sortSum(a, b, true))];
      });

      setSumSortAsc((prev) => !prev);
    }

    if (columnName === "sum" && !sumSortAsc) {
      setJobs((prev) => {
        return [...prev.sort((a, b) => sortSum(a, b, false))];
      });

      setSumSortAsc((prev) => !prev);
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.titleContainer}>
        <div>
          <h3>{`Group #${groupNumber}`}</h3>
        </div>
      </div>
      <HeaderRow handleTitleClick={handleTitleClick} />
      {jobs.map((job, i) => {
        return <Row jobObj={job} key={uniqid()} index={i + 1} />;
      })}
      <GroupSum sum={totalSumMoneyFormat} />
    </div>
  );
}

CombinedJobs.propTypes = {
  sameJobsArr: PropTypes.arrayOf(PropTypes.shape),
  groupNumber: PropTypes.number,
};
