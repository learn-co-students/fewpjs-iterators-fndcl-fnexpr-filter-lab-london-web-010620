// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase());
};

const fuzzyMatch = (drivers, letters) => {
  return drivers.filter(
    driver =>
      driver.split("", letters.length).toString() ==
      letters.split("").toString()
  );
};

const matchName = (drivers, name) => {
  return drivers.filter(driver => driver.name === name);
};
