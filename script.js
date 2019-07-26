console.log('javascript is linked');
console.log('dom is loading');

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM is Ready!');
    // event listeners
    $('#submitButton').on('click', submitButton)
}

function submitButton() {
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let titleName = $('#titleNameIn').val();
    let annualName = $('#annualNameIn').val();

    $('#fistNameDom').append(firstName);
    $('#lastNameDom').append(lastName);
    $('#idNumberDom').append(idNumber);
    $('#titleNameDom').append(titleName);
    $('#annualNameDom').append(annualName);
        
}
// DOM set up
// ready function

// submit button - add employee data to the table

// calculate total monthly and update on the dom

// clear input fields

// delete button - delete this row from the table
console.log('dom has loaded');
