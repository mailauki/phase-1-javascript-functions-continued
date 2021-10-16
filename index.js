// Your code here
function saturdayFun(someValue = "roller-skate") {
    return `This Saturday, I want to ${someValue}!`
}
function mondayWork(someValue = "go to the office") {
    return `This Monday, I will ${someValue}.`
}
function wrapAdjective(highlight = "*") {
    return function (prompt = "special") {
        return `You are ${highlight}${prompt}${highlight}!`
    }
}
