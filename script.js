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
    $('#totalTable').on('click', '.deleteButton', clickDeleteButton)
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
                                <td><button class="deleteButton">Delete</button></td>
                                </tr>`);

    totalAnnualSalary += parseFloat(annualName);

    $('#firstNameIn').val(''); 
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleNameIn').val('');
    $('#annualNameIn').val('');

}
// let totalMonthly = 0; 
// // // calculate total monthly and update on the dom
function calMonthlyTotals() {
    console.log(totalAnnualSalary);

    totalMonthlySalary = (totalAnnualSalary / 12 );
    console.log(totalMonthlySalary);
    
    $('#totalMonthly').text('Total Monthly: $' + totalMonthlySalary );
    console.log('working');
    return totalMonthlySalary
}
// delete button - delete this row from the table
function clickDeleteButton() {
    // $('#deleteButton').on('click', clickDeleteButton)
    console.log('this is working');
    $(this).parent().parent().remove()  
}

console.log('dom has loaded');
