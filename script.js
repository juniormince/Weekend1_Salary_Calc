console.log('js check')

$(document).ready(onReady);

function onReady()  {
    console.log('jquery checkarino');
    $('button').on('click', clickHandler);

}

function clickHandler() {
    console.log('free click check!');
}

