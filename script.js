console.log('js check');

let budget = 20000;
let totalSalary = 0;
let expenses = [];
let monthlyBudget = 0;

class Expense{
    constructor( firstName, lastName, idNumber, jobTitle, annualSalary ){
        this.first = firstName;
        this.last = lastName;
        this.id = idNumber;
        this.job = jobTitle;
        this.salary = annualSalary;
    }
}

$(document).ready(onReady);

function onReady()  {
    console.log('jquery checkarino');
    $('button').on('click', clickHandler);
    // $('#blankRow').append(
    //     '<td colspan='5'>' + '</td>' 
    // that empty row in the wireframe? figured out how to make one but couldn't get how to add it (in here or html)
    // and keep it to the bottom. inputs kept appending after it
} //works

function clickHandler() {
    console.log('free clicks!'); //checking if button click works
    addEmployee(); 
    //adds inputs to table
    let newBudget = new Expense( $('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#jobTitle').val(), $('#annualSalary').val() );
    expenses.push( newBudget ); 
    //adds to total monthly hopefully
    updateMonthly();
    clearInputs();
} //works

function addEmployee()    {
    let tableOutput = $( '#employeeList');
    $('#employeeList').append( 
        '<tr>' +
            '<td>' + $('#firstName').val() + '</td>' +
            '<td>' + $('#lastName').val() + '</td>' +
            '<td>' + $('#idNumber').val() + '</td>' +
            '<td>' + $('#jobTitle').val() + '</td>' +
            '<td>' + Number($('#annualSalary').val()).toFixed(2) + '</td>' +
        '</tr>'
    ); //og version of addEmployee
    // for (thing of expenses) {
    //     tableOutput.append( '<tr>' +
    //     '<td>' + thing.first + '</td>' +
    //     '<td>' + thing.last + '</td>' +
    //     '<td>' + thing.id + '</td>' +
    //     '<td>' + thing.job + '</td>' +
    //     '<td>' + thing.salary + '</td>' +
    // '</tr>' );
    // } //forof loop test version, doesn't add vals
    // totalSalary += Number($('#annualSalary').val());
    //clears inputs after submission
} //works

function updateMonthly()    {
    //update totalMonthly 
    // let remainingBudget = monthlyBudget - Number($('#annualSalary').val(''))/2; // test, NaN return happening
    monthlyBudget += Number($('#annualSalary').val())/12;
    //**remember to divide by 12 once fixed **/
    // remainingBudget = Number(remainingBudget); //NaN  
    let totalMonthly = $('#totalMonthly');
    totalMonthly.empty();
    totalMonthly.append( '<h2>Total Monthly: $' + monthlyBudget.toFixed(2) + '<h2/>');
    if( monthlyBudget > 20000 ){
        totalMonthly.css('background', 'red' ); //might work after NaN fix
    }

    console.log('total monthly errr yearly test:', monthlyBudget);
    }
    // $('#totalMonthly').append( '<h2>Total Monthly: ' + Number($('#annualSalary').val()).toFixed(2) + '</h2>');
    // totalExpenses += Number($('#annualSalary').val()).toFixed(2);
    //
// } //ahahahahaha

function clearInputs()  {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}