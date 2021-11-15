//Add current date to gitcurrentDay
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Color-code time blocks based on time to current time: past, present or future. 

function timeUpdate() {
    //check current 
    var currentHour = moment().hour();
     

    //pull time block
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        //  past, present, and future time block loop

        //check if hour is in the past
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        //check if hour is in the present 
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        //check if hour is in the future
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

timeUpdate();

//Save text to local storage 

$(".saveBtn").on("click", function () {
    var descr = $(this).siblings(".description").val();
    var hour = $(this).siblings(".hour").text();

    localStorage.setItem(hour, descr);
})

 // Save user entry on button click
 $(".savePlanButton").on("click", saveEntry);

 // Grab whatever is in local storage for that hour
 checkSchedule();

 function checkSchedule() {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
  }

// Make sure local storage checked on page load to show plans
window.onload = checkSchedule();

