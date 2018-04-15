console.log('js check');

$(document).ready(onReady);

function onReady()  {
    console.log('jquery checkarino');
    $('button').on('click', clickHandler);

}

function clickHandler() {
    console.log('free clicks!'); //checking if button click works
    addEmployee();
}

function addEmployee()    {
    $('#employeeList').append(
        '<tr>' +
            '<td>' + $('#firstName').val() + '</td>' +
            '<td>' + $('#lastName').val() + '</td>' +
            '<td>' + $('#idNumber').val() + '</td>' +
            '<td>' + $('#jobTitle').val() + '</td>' +
            '<td>' + $('#annualSalary').val() + '</td>' +
        '</tr>'
    );
}







//example test run info

/* '<tr>' + '<td>' + 'Jen' + '</td>'
'<td>' + 'Barber' + '</td>'
'<td>' + '4521' + '</td>'
'<td>' + 'Team Lead' + '</td>'
'<td>' + '80,000' + '</td>' + '</tr>'*/