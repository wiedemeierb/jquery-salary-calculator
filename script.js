console.log('javascript is linked');
console.log('dom is loading');
// DOM set up
$(document).ready(readyNow);

let totalAnnualSalary = 0;
let totalMonthly = 0; 

// create function readyNow to collect all functions
function readyNow() {
    console.log('DOM is Ready!');
    // event listeners
    $('#submitButton').on('click', submitButton)
    $('#submitButton').on('click', calMonthlyTotals)
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
                                <td><button>Delete</button></td>
                                </tr>`);

    totalAnnualSalary += parseFloat(annualName);
    
    // ($('#annualNameIn').val());
    
    $('#firstNameIn').val(''); 
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleNameIn').val('');
    $('#annualNameIn').val('');

    // calMonthlyTotals()

}
// let totalMonthly = 0; 
// // // calculate total monthly and update on the dom
function calMonthlyTotals() {

    // totalAnnualSalary += parseFloat(($('#annualNameIn').val()));
    console.log(totalAnnualSalary);

    totalMonthlySalary = (totalAnnualSalary / 12 );
    console.log(totalMonthlySalary);
    

    $('#totalMonthly').text('Total Monthly: $' + totalMonthlySalary );
    console.log('working');
    return totalMonthlySalary

   
    
// totalMonthlySalary = {
//     Total: $('annualNameIn').val()

}

 


// clear input fields

// delete button - delete this row from the table
console.log('dom has loaded');
