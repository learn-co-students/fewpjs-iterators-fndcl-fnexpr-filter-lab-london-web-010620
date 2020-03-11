// Code your solution here

const findMatching = (drivers, string) => {
    return drivers.filter (possibleMatch => 
        possibleMatch.toLowerCase() === string.toLowerCase()
        )
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter( possibleMatch => 
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0 

    )
}

const matchName = (drivers, string) => {
    return drivers.filter(record => record.name === string)
}