/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";
import {
  reduceJobs,
  calcTotalSum,
  moneyFormat,
  sortAscDecision,
  sortDescDecision,
  sortAscCategory,
  sortDescCategory,
  sortAscSum,
  sortDescSum,
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

    const columnName = e.target?.innerText?.toLowerCase();

    if (columnName === "decision" && decisionSortAsc) {
      setJobs((prev) => {
        return [...prev.sort(sortAscDecision)];
      });

      setDecisionSortAsc((prev) => !prev);
    }

    if (columnName === "decision" && !decisionSortAsc) {
      setJobs((prev) => {
        return [...prev.sort(sortDescDecision)];
      });

      setDecisionSortAsc((prev) => !prev);
    }

    if (columnName === "category" && categorySortAsc) {
      setJobs((prev) => {
        return [...prev.sort(sortAscCategory)];
      });

      setCategorySortAsc((prev) => !prev);
    }

    if (columnName === "category" && !categorySortAsc) {
      setJobs((prev) => {
        return [...prev.sort(sortDescCategory)];
      });

      setCategorySortAsc((prev) => !prev);
    }

    if (columnName === "sum" && sumSortAsc) {
      setJobs((prev) => {
        return [...prev.sort(sortAscSum)];
      });

      setSumSortAsc((prev) => !prev);
    }

    if (columnName === "sum" && !sumSortAsc) {
      setJobs((prev) => {
        return [...prev.sort(sortDescSum)];
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
