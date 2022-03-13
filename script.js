//Add current date to gitcurrentDay
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// find current hour
    var currentHour = moment().hour();
     

    //Get hour from each time block
    $(".time-block").each(function () {
        var blockHour = $(this).attr("id").split("hour")[1];

        //check if hour is in the past
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        //check if hour is in the present 
        else if (blockHour === currentHour) {
            $(this).addClass("present");
        }
        //check if hour is in the future
        else {
            $(this).addClass("future");
        }
    })
;

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

//Save text to local storage 

$(".saveBtn").on("click", function () {
    var descr = $(this).siblings(".description").val();
    var hour = $(this).siblings(".hour").text();

    localStorage.setItem(hour, descr);
})

 // Save user entry on button click
 //$(".savePlanButton").on("click", saveEntry);

 checkSchedule();

// Make sure local storage checked on page load to show plans
window.onload = checkSchedule();

