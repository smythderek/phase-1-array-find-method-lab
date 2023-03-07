// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(array) {
    // do the find to see if we have a winning record
    const victory = array.find(season => season.result === "W");
    // this returns the first element that matches (entire object), or undefined

    // when matching season object is returned, instead only return the year
    if (victory !== undefined) {
        return victory.year;
    }
    // if no W found, return undefined
    else return victory;  
}

// console.log(superbowlWin(record));