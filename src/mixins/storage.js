const setZipCode = (zipCode) => {
  const localList = JSON.parse(localStorage.getItem("zipCode"));
  const list = isNull(localList)
    ? { ...zipCode }
    : { ...localList, ...zipCode };

  localStorage.setItem("zipCode", JSON.stringify(list));
};

const delZipCode = (zipCode) => {
  const localList = JSON.parse(localStorage.getItem("zipCode"));

  delete localList[zipCode];

  localStorage.setItem("zipCode", JSON.stringify(localList));
};

const getZipCode = () => JSON.parse(localStorage.getItem("zipCode"));

const isNull = (obj) => obj === null;

export { setZipCode, getZipCode, delZipCode };
