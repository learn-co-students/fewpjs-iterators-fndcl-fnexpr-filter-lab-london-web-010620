// Code your solution here

const findMatching = (drivers, string) => {
   return drivers.filter(n => n.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(n => n.charAt(0) === string.charAt(0))
}

const matchName = (drivers, string) => {
    return drivers.filter(n => n.name === string)
  };