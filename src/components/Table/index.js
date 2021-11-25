/** @jsxImportSource @emotion/react */
import React from "react";
import uniqid from "uniqid";

import CombinedJobs from "../CombinedJobs";
import GroupSum from "../GroupSum";
import { moneyFormat, calcTotalSum, filterJobs } from "../../utils/generic";
import results from "./../../results.json";

import { styles } from "./styles";

export default function Table() {
  const { jobs } = results;

  const jobsIds = jobs.map((el) => el.id);

  const uniqJobsIds = [...new Set(jobsIds)];

  const totalSum = moneyFormat(Math.floor(calcTotalSum(jobs) * 100) / 100);

  return (
    <div css={styles.table}>
      {uniqJobsIds.map((jobId, i) => {
        return (
          <CombinedJobs
            key={uniqid()}
            sameJobsArr={filterJobs(jobs, jobId)}
            groupNumber={i + 1}
          />
        );
      })}
      <GroupSum sum={totalSum} totalSumType={true} />
    </div>
  );
}
