// Your code here
function saturdayFun(thing = `roller-skate`) {
    return `This Saturday, I want to ${thing}!`
}

function mondayWork(work = `go to the office`) {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wrapping = `*`) {
    return function(phrase = `special`) {
        let newPhrase = wrapping + phrase + wrapping
        return `You are ` + (newPhrase) + `!`
    }
}