function getInputValueAsNumber(inputId) {
    if (document.getElementById(inputId)) {
        return Number(document.getElementById(inputId).value)
    } else {
        console.log('Sorry, couldn\'t find this ID: ', inputId)
    }
}

function createFlexTable(flexRows, flexCols, flexHighlight) {
    let string
    if (flexRows && flexCols) {
        string = "<div class='tableContainer'>\n"

        for (let row = 1; row <= flexRows; row++) {

            if (flexHighlight && flexHighlight === row) {

                string += "<div class='tableHighlight tableRow'>\n"
            } else {
                string += "<div class='tableRow'>"
            }

            for (let col = 1; col <= flexCols; col++) {

                if (flexHighlight && flexHighlight === col) {
                    string += "<div class='tableHighlight tableCol'>\n"
                } else {
                    string += "<div class='tableCol'>"
                }

                string += row * col
                string += "</div>\n"
            }
            string += "</div>\n"
        }


        string += "</div>\n"
    } else {
        string = 'Provide some inputs'
    }

    document.getElementById("output").innerHTML = string;
}