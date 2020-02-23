const findMatching = (drivers, string) => {
  return drivers.filter(driver => driver.toLowerCase() == string.toLowerCase());
};

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(
    driver => driver.name === string || driver.startsWith(string.slice(0, 2))
  );
};

const matchName = (drivers, string) => {
  return drivers.filter(driver => driver.name === string);
};
