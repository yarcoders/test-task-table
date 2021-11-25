export const reduceJobs = (allJobsArr, allCategories) => {
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

export const calcTotalSum = (allJobsArr) => {
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

export const moneyFormat = (amount) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

export const getCategoryName = (allCategories, categoryId) => {
  const categoryObj = allCategories.find((catObj) => catObj.id === categoryId);

  return categoryObj.name_en;
};

export const filterJobs = (allJobs, jobId) => {
  return allJobs.filter((job) => job.id === jobId);
};

export const genValues = (jobObj, allCategories, styles) => {
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

export const sortStr = (prop1, prop2, asc) => {
  if (prop1 > prop2 && asc) return -1;
  if (prop1 < prop2 && asc) return 1;
  if (prop1 > prop2 && !asc) return 1;
  if (prop1 < prop2 && !asc) return -1;
  return 0;
};

export const sortSum = (jobObj1, jobObj2, asc) => {
  if (asc) return jobObj2.totalSum - jobObj1.totalSum;
  if (!asc) return jobObj1.totalSum - jobObj2.totalSum;
};
