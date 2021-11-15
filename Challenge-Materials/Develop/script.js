//Add current date to gitcurrentDay
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Color-code time blocks based on time to current time: past, present or future. 

function timeUpdate() {
    //check current 
    var currentHour = moment().hour();
     

    //pull time block
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);