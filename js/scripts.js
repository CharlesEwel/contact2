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
});
