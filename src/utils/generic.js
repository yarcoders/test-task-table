export const reduceJobs = function reduceJobsArrSameId(
  allJobsArr,
  allCategories
) {
  const reducedJobs = allJobsArr.reduce((acc, jobObj, i) => {
    const repeatedObj = acc.find((el) => el.job.id === jobObj.job.id);

    const extendedObj = {
      ...jobObj,
      categoryName: getCategoryName(allCategories, jobObj.id_chapter),
      totalSum: jobObj.job.price * jobObj.value * jobObj.coef,
    };

    if (repeatedObj) {
      const newEntry = {
        ...repeatedObj,
        categoryName: extendedObj.categoryName,
        totalSum: extendedObj.totalSum,
        value: repeatedObj.value + jobObj.value,
      };

      const filteredAcc = acc.filter((el) => el.job.id !== jobObj.job.id);

      return [...filteredAcc, newEntry];
    }
    return [...acc, extendedObj];
  }, []);

  return reducedJobs;
};

export const calcTotalSum = function totalSumForJobsArr(allJobsArr) {
  const totalSum = allJobsArr.reduce((acc, jobObj, index) => {
    const {
      value,
      coef,
      job: { price },
    } = jobObj;
    const currentJobSum = value * coef * price;
    return acc + currentJobSum;
  }, 0);

  return totalSum;
};

export const moneyFormat = function applyMoneyFormatToNumber(amount) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

export const getCategoryName = function getCategoryNameById(
  allCategories,
  categoryId
) {
  const categoryObj = allCategories.find((catObj) => catObj.id === categoryId);

  return categoryObj.name_en;
};

export const filterJobs = function filterJobsById(allJobs, jobId) {
  return allJobs.filter((job) => job.id === jobId);
};

export const genValues = function generateValuesToRenderInRow(
  jobObj,
  allCategories,
  styles
) {
  if (jobObj) {
    const {
      coef,
      dec_id,
      value,
      unit,
      id_chapter,
      job: { name, price },
    } = jobObj;

    const currCategoryName = getCategoryName(allCategories, id_chapter);

    const priceMoneyFormat = moneyFormat(price);

    const sumMoneyFormat = moneyFormat(price * value * coef);

    return [
      //    { value: 1, style: styles.cellIndex },
      { value: name, style: styles.cellName },
      { value: currCategoryName, style: styles.cell },
      { value: dec_id, style: styles.cell },
      { value: coef, style: styles.cell },
      { value: value + unit, style: styles.cell },
      { value: priceMoneyFormat, style: styles.cell },
      { value: sumMoneyFormat, style: styles.cell },
    ];
  }

  return [
    { value: "#", style: styles.cellIndex },
    { value: "Name", style: styles.cellName },
    { value: "Category", style: styles.cell },
    { value: "Decision", style: styles.cell },
    { value: "Coef", style: styles.cell },
    { value: "Value", style: styles.cell },
    { value: "Price", style: styles.cell },
    { value: "Sum", style: styles.cell },
  ];
};

export const sortAscDecision = (jobObj1, jobObj2) => {
  if (jobObj1.dec_id > jobObj2.dec_id) return -1;
  if (jobObj1.dec_id < jobObj2.dec_id) return 1;
  return 0;
};

export const sortDescDecision = (jobObj1, jobObj2) => {
  if (jobObj1.dec_id > jobObj2.dec_id) return 1;
  if (jobObj1.dec_id < jobObj2.dec_id) return -1;
  return 0;
};

export const sortAscCategory = (jobObj1, jobObj2) => {
  if (jobObj1.categoryName > jobObj2.categoryName) return -1;
  if (jobObj1.categoryName < jobObj2.categoryName) return 1;
  return 0;
};

export const sortDescCategory = (jobObj1, jobObj2) => {
  if (jobObj1.categoryName > jobObj2.categoryName) return 1;
  if (jobObj1.categoryName < jobObj2.categoryName) return -1;
  return 0;
};

export const sortAscSum = (jobObj1, jobObj2) => {
  return jobObj2.totalSum - jobObj1.totalSum;
};

export const sortDescSum = (jobObj1, jobObj2) => {
  return jobObj1.totalSum - jobObj2.totalSum;
};
