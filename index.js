// Code your solution here
const findMatching = (array, match) => {
  return array.filter(el => el.toLowerCase() === match.toLowerCase())
}
const fuzzyMatch = (array, match) => {
  return array.filter(el => el.toLowerCase().indexOf(match.toLowerCase()) === 0)
}
const matchName = (array, match) => {
    return array.filter(el => el.name === match)
    }
