//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

function Place(country, continent, landmarks, timeOfYear) {
  this.country = country;
  this.continent = continent;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

function Todo(task, deadline, priority, project) {
  this.task = task;
  this.deadline = deadline;
  this.priority = priority;
  this.project = project;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var newContinent = $("input#new-continent").val();
    var newCountry= $("input#new-country").val();
    var newLandMarks= $("input#new-landmarks").val();
    var newTime= $("input#new-time").val();

    var newPlace = new Place(newContinent, newCountry, newLandMarks, newTime);
    console.log(newPlace)
    console.log(newPlace.continent)
    $("ul#places").append("<li><span class='place'>" + newPlace.continent + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.continent);
      $(".continent").text(newPlace.continent);
      $(".country").text(newPlace.country);
      $(".landMark").text(newPlace.landmarks);
      $(".timeOfYear").text(newPlace.timeOfYear);
    });
    $("input#new-continent").val("");
    $("input#new-country").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
  });

  $("form#new-todo").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedDeadline = $("input#new-deadline").val();
    var inputtedPriority = $("input#new-priority").val();
    var inputtedProject = $("input#new-project").val();

    var newTodo = new Todo(inputtedTask, inputtedDeadline, inputtedPriority, inputtedProject);

    $("ul#toDoList").append("<li><span class='todo'>" + newTodo.task + "</span></li>");
    $(".todo").last().click(function() {
      $("#show-todo").show();
      $("#show-todo h2").text(newTodo.task);
      $(".task").text(newTodo.task);
      $(".deadline").text(newTodo.deadline);
      $(".priority").text(newTodo.priority);
      $(".project").text(newTodo.project);
    });
    $("input#new-task").val("");
    $("input#new-deadline").val("");
    $("input#new-priority").val("");
    $("input#new-project").val("");
  });
});
