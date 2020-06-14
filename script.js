
var cont = $(".container")
var time = moment().format("H");
var timeArr = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
var hourArr = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
var timeHourArr = ($.merge(timeArr, hourArr));

$(document).ready(function () {
   $("#currentDay").append(moment().format('MMMM Do YYYY -  ha'));
   

   $.each(timeArr, function (index, value) {
      if (hourArr[index] === undefined) {
         return false;
      }

      function getItemFrom(index) {
         if (localStorage.getItem(index)) {
            return localStorage.getItem(index)
         }
      }

      cont.append('<section class="row">\
      <div class="col-2 hour">' + timeArr[index] + '</div>\
      <div class="col-10 time-block">\
      <input ' + getItemFrom(hourArr[index]) + '" id="input-data" name="schedule" class="input-task form-control form-control-lg" data-time="' + hourArr[index] + '" placeholder=""/>\
      <button id="' + hourArr[index] + '" class="btn saveBtn save-task" type="button"><i class="fas fa-save"></i></button></div></section>');
   
   });

   function status() {
      $("input").each(function () {
         
         var timeLook = parseInt($(this).attr("data-time"));
         
         if (time > timeLook) {
            $(this).addClass("past");
         } else if (time < timeLook) {
            $(this).addClass("future");
         } else {
            $(this).addClass("present");
         }
      });
   }
   status();
   
   $("button").on("click", function (event) {
        var buttonClick = this.id;
        var text = $(this).siblings('.input-task').val()
        localStorage.setItem(buttonClick, JSON.stringify(text))
   }); 
});