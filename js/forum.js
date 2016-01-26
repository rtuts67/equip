'use strict'

var pastLists = document.getElementById('past-lists'); //DOM ids
var saveButton = document.getElementById('save-past-list');
var deleted = document.getElementById('delete');
var place = [];
var tripDetails = [];
var extraStuff = [];
var savePlace = localStorage.getItem('placePersist');
var saveTripDetails = localStorage.getItem('detailsPersist');
var saveExtraStuff = localStorage.getItem('extraPersist');

if (savePlace) { //local storage
  place = JSON.parse(savePlace);
  tripDetails = JSON.parse(saveTripDetails);
  extraStuff = JSON.parse(saveExtraStuff);
  console.log(place);
  console.log(tripDetails);
  console.log(extraStuff);
} else {
  console.log('storage empty yo, initializing!!!!!');
  localStorage.setItem('placePersist', JSON.stringify(place));
  localStorage.setItem('detailsPersist', JSON.stringify(tripDetails));
  localStorage.setItem('extraPersist', JSON.stringify(extraStuff));
}
var makePastLists = function() {
  for (var i = 0; i < place.length; i++) {
    var journalEl = document.createElement('li');
    journalEl.innerHTML = '<ul><li>Destination: ' + place[i] + '</li><li>Comments: ' + tripDetails[i] + '</li><li>Whish I\'d brought: ' + extraStuff[i] + '</li></ul><br>';
    journalEntries.appendChild(journalEl);
  }
}

var renderJournal = function() {
  event.preventDefault();
  var where2 = event.target.whereTo.value; //form data
  var details2 = event.target.detail.value;
  var extra2 = event.target.extras.value;
  place.push(where2);
  tripDetails.push(details2);
  extraStuff.push(extra2);

  event.target.whereTo.value = null; //clear forms
  event.target.detail.value = null;
  event.target.extras.value= null;
  localStorage.setItem('placePersist', JSON.stringify(place));
  localStorage.setItem('detailsPersist', JSON.stringify(tripDetails));
  localStorage.setItem('extraPersist', JSON.stringify(extraStuff));
  makePastLists();
}

var handleSaveClick = function(event) {
  renderJournal();
}
var handleDeleteClick = function(event) {
  console.log('deleting local storage!');
  localStorage.clear();
}
pastLists.addEventListener('submit', handleSaveClick); //event listener
deleted.addEventListener('click', handleDeleteClick);
