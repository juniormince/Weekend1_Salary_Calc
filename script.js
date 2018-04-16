console.log('js check');

let budget = 20000;
let expenses = [];

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
} //works

function addEmployee()    {
    let totalSalary = 0;
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
    totalSalary += Number($('#annualSalary').val());
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    //clears inputs after submission
} //works

function updateMonthly( totalSalary )    { //gotta give
    //update totalMonthly 
    let remainingBudget = budget - totalSalary ;
    remainingBudget = Number(remainingBudget);
    console.log( 'remaining: ', remainingBudget);
    let totalMonthly = $('#totalMonthly');
    totalMonthly.append( '<h2>Total Monthly: $' + Number(remainingBudget).toFixed(2) + '<h2/>');
    if( remainingBudget > 20000 ){
        totalMonthly.css('background', 'red' );
    }

    // for ( pay of expenses ) {
    //     totalMonthly.append( '<h2>Total Monthly: $' + Number($('#annualSalary').val()).toFixed(2) + '</h2>');
    //     totalExpenses += Number($('#annualSalary').val()).toFixed(2);

    console.log('total monthly errr yearly test:', totalMonthly);
    }
    // $('#totalMonthly').append( '<h2>Total Monthly: ' + Number($('#annualSalary').val()).toFixed(2) + '</h2>');
    // totalExpenses += Number($('#annualSalary').val()).toFixed(2);
    //
// } //ahahahahaha
  


//employee.salary rename??




//example test run info

/* '<tr>' + '<td>' + 'Jen' + '</td>'
'<td>' + 'Barber' + '</td>'
'<td>' + '4521' + '</td>'
'<td>' + 'Team Lead' + '</td>'
'<td>' + '80,000' + '</td>' + '</tr>'*/