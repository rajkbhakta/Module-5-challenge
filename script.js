var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

var work9AM = $("#9AM");
var work10AM = $("#10AM");
var work11AM = $("#11AM");
var work12PM = $("#12PM");
var work1PM = $("#1PM");
var work2PM = $("#2PM");
var work3PM = $("#3PM");
var work4PM = $("#4PM");
var work5PM = $("#5PM");
var saveButton = $(".save-icon");

var workArray = [
  work9AM,
  work10AM,
  work11AM,
  work12PM,
  work1PM,
  work2PM,
  work3PM,
  work4PM,
  work5PM,
];

function loadSavedData(event) {
  workArray.forEach(function (item) {
    item.val(localStorage.getItem("hour" + item.data("hour")));
  });
}

loadSavedData();

function submitFunction(event) {
  var textArea = $(event.currentTarget).siblings("textarea");
  var hourData = textArea.data("hour");
  localStorage.setItem("hour" + hourData, textArea.val());
}
var now = moment().format("kk");

workArray.forEach(function (item) {
  if (now > item.data("hour")) {
    item.addClass("past");
  } else if (now == item.data("hour")) {
    item.addClass("present");
  } else if (now < item.data("hour")) {
    item.addClass("future");
  }
});

saveButton.on("click", submitFunction);
