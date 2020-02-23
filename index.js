// Code your solution here
let findMatching = (drivers, string) => {
  return drivers.filter(n =>
    n.toLowerCase() === string.toLowerCase()
  )
};

let fuzzyMatch = (drivers, string) => {
  return drivers.filter(n =>
    n.toLowerCase()[0] === string.toLowerCase()[0]
  )
};

let matchName = (drivers, string) => {
  return drivers.filter(n =>
    n.name === string)
};
