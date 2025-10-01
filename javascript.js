function getRowsDesired() {
    // console.log(Number(document.getElementById('rows').value));
    return Number(document.getElementById("rows").value)
}

function getColumnsDesired() {
    return Number(document.getElementById("cols").value)
}

function getHighlightValue() {
    let highlightValue = document.getElementById("highlight").value

    if (highlightValue !== '') {
        return Number(highlightValue)
    }
}

function createWithHtmlTable(rows, cols, highlight) { // method declaration, has two parameters
    let string // define a variable called string
    if (rows && cols) { // if rows and columns were provided
        string = "<table>\n" // start building the HTML table

        // first "for" loop to build the rows of the table
        for (let row = 1; row <= rows; row++) {

            if (highlight && highlight === row) {
                // if highlight "IS TRUTHY" and its value matches the row
                // we're on, then do this next
                string += "<tr class='highlight'>\n"
            } else {
                // otherwise just start a regular HTML row with no class
            string += "<tr>\n" // start building an HTML row
            }
            // second "for" loop to build the columns of EACH row
            for (let col = 1; col <= cols; col++) {

                if (highlight && highlight === col) {
                    string += "<td class='highlight'>\n"
                } else {
                string += "<td>" // start building a single "cell" or column in the HTML row
                }

                string += row * col // populate the contents of the HTML cell
                string += "</td>\n" //complete the HTML cell
            }
            string += "</tr>\n" // complete the HTML row
        }

        string += "</table>\n" // complete the HTML table
    } else { // I guess the method wasn't provided either rows or columns
        string = 'Provide some inputs' // set values of "string" variable to "Provide some inputs"
    }

    document.getElementById("output").innerHTML = string; // WRITE the string we've just built to an element
    // in the HTML document whose ID is "output"
}










/*

/!* LOOP EXAMPLES *!/
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
*/
