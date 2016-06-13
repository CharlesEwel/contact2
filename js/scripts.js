//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

function Place(continent, country, city, landmarks, timeOfYear) {
  this.country = country;
  this.continent = continent;
  this.city = city;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

function Todo(task, deadline, priority, project) {
  this.task = task;
  this.deadline = deadline;
  this.priority = priority;
  this.project = project;
}

function formatDate(date) {
  var day = date.charAt(8)+date.charAt(9);
  var month = date.charAt(5)+date.charAt(6);
  var year = date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3);
  return month+'/'+day+'/'+year
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Place.prototype.placeName = function() {
  return this.city + ", " + this.country;
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

  var landmarkArray=[];
  $("button#add-landmark").click(function() {
    event.preventDefault();
    var additionalLandmark= $("input#new-landmarks").val();
    landmarkArray.push(additionalLandmark);
    $("input#new-landmarks").val("");
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var newContinent = $("input#new-continent").val();
    var newCountry= $("input#new-country").val();
    var newCity= $("input#new-city").val();
    var newLandMarks= $("input#new-landmarks").val();
    var newTime= $("input#new-time").val();

    var prevLandmarks = landmarkArray.map(function(landmark){
      return landmark;
    });
    if(newLandMarks != "") {
      prevLandmarks.push(newLandMarks);
    }

    var newPlace = new Place(newContinent, newCountry, newCity, prevLandmarks, newTime);
    console.log(newPlace);

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName() + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.continent);
      $(".continent").text(newPlace.continent);
      $(".country").text(newPlace.country);
      $(".city").text(newPlace.city);
      $(".landMark").text(newPlace.landmarks);
      $(".timeOfYear").text(newPlace.timeOfYear);
    });
    $("input#new-continent").val("");
    $("input#new-country").val("");
    $("input#new-city").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
    while(landmarkArray.length > 0) {
      landmarkArray.pop();
    }
    console.log(newPlace);
  });

  $("form#new-todo").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedDeadline = $("input#new-deadline").val();
    var inputtedPriority = $("input:radio[name=priority]:checked").val();
    var inputtedProject = $("input#new-project").val();

    var newTodo = new Todo(inputtedTask, formatDate(inputtedDeadline), inputtedPriority, inputtedProject);

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
