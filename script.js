$(document).ready(function() {
    console.log('Ready!');
    
    // Displaying the current date and time from: day.js
    let now = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    let displayDate = document.getElementById('currentDay');
    displayDate.innerHTML = now;
  
    let current = dayjs().format('HH');
  
    // past, present and future functionality to check the activity that happens in each time
    $(".time-div").each(function(){
      var timeDiv = $(this).data("hour");
      if (current == timeDiv){
        $(this).addClass('present');
        $(this).children(".description").addClass("present");
      } else if (current < timeDiv){
        $(this).removeClass('present');
        $(this).addClass('future');
      } else {
        $(this).removeClass('future');
        $(this).addClass('past');
      }
    });
})

// Creating function to save the data to the local storage
$('.saveBtn').click(function(event) {
    event.preventDefault();
    var value = $(this).siblings('.time-block').val();
    var time = $(this).parent().attr('id').split('-')[1];
    localStorage.setItem(time, value);
  });