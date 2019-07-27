console.log('javascript is linked');
console.log('dom is loading');
// DOM set up
$(document).ready(readyNow);

// create function readyNow to collect all functions
function readyNow() {
    console.log('DOM is Ready!');
    // event listeners
    $('#submitButton').on('click', submitButton)
}
// submit button - add employee data to the table
function submitButton() {
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let titleName = $('#titleNameIn').val();
    let annualName = $('#annualNameIn').val();

    $('#totalTable').append(`<tr><td>${firstName}</td>
                                <td>${lastName}</td>
                                <td>${idNumber}</td>
                                <td>${titleName}</td>
                                <td>${annualName}</td>
                                </tr>`);
    
    // $('#firstNameDom').empty('');                            
    // $('#totalTable').append(firstName);
    // $('#lastNameDom').append(lastName);
    // $('#idNumberDom').append(idNumber);
    // $('#titleNameDom').append(titleName);
    // $('#annualNameDom').append(annualName);
    
        
}

// calculate total monthly and update on the dom


// clear input fields

// delete button - delete this row from the table
console.log('dom has loaded');
