/* LOOP EXAMPLES */
console.log('Here\'s a for loop showing 1...10:\n')
for (let i = 0 ; i <10; i++) {
    console.log(`${ i }\n`)
}



console.log('Here\'s a do-while loop showing 1...10:\n')
let i = 0
do {
    console.log(i + '\n')
    i++
} while (i < 10)



console.log('Here\'s a while loop showing 1...10:\n')
let j = 0
while (j < 10) {
    console.log(`${ j }\n`)
    j++
}



console.log('Here\'s a foreach loop iterating over an array showing 1...10:\n')
let nums = [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${ num }\n`)
})



console.log('Here\'s a multiplication table method rendered in the console with a for loop:\n')
console.log('This demos variables, concatenation, for loops, console.logging and methods, along with method parameters\n')
let timesTable = (to) => {
    console.log('Here\'s a times table to ' + to + '\n')

    if (Number.isInteger(to)) {
        //row iterator
        for (let i = 1; i <= to; i++) {
            let row = ""
            //column iterator
            for (let j = 1; j <= to; j++) {
                row += `${i * j}\t`
            }
            console.log(row)
        }
    } else {
        console.log(`Sorry, ${to} isn\'t a number!`)
    }
}
timesTable(4)

timesTable(12)

timesTable('x')