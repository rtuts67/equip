'use strict'
var allTrips = [];
var listForms = [];
var pastLists = document.getElementById('past-lists'); //DOM ids
var submit = document.getElementById('submit');
var saveButton = document.getElementById('save-past-list');
var deleted = document.getElementById('delete');
var equipList = document.getElementById('showEquipList');
var ulEquipList = document.getElementById('ulEquipList');
var tripType = localStorage.getItem('totalTrips');

function CreateAllInfo(place, details, extraStuff) {
  this.place = place;
  this.details = details;
  this.extraStuff = extraStuff;
  listForms.push(this);
}

if (allTrips < 1) {
  allTrips = JSON.parse(tripType);
  console.log(allTrips);
} else {
  alert('You have no saved lists. Click on the Equip tab to get started!')
}
CreateAllInfo.prototype.renderJournal = function() {
  event.preventDefault();
  var where2 = event.target.whereTo.value; //form data
  var details2 = event.target.detail.value;
  var extra2 = event.target.extras.value;

  // var allTrips
  event.target.whereTo.value = null; //clear forms
  event.target.detail.value = null;
  event.target.extras.value= null;
  localStorage.setItem('placePersist', JSON.stringify(place));
  localStorage.setItem('detailsPersist', JSON.stringify(tripDetails));
  localStorage.setItem('extraPersist', JSON.stringify(extraStuff));
  makePastLists();
}
function addInput() {
  var dropdown = document.getElementById('dropdown');
  for(var i = 0; i < allTrips.length; i ++) {
    var el = document.createElement("option");
    el.textContent = allTrips[i].name;
    el.value = i;
    dropdown.appendChild(el);
  }
}
addInput();

// var makePastLists = function() {
//   for (var i = 0; i < allTrips.length; i++) {
//     var journalEl = document.createElement('li');
//     journalEl.innerHTML = '<ul><li>Destination: ' + place[i] + '</li><li>Comments: ' + tripDetails[i] + '</li><li>Whish I\'d brought: ' + extraStuff[i] + '</li></ul><br>';
//     journalEntries.appendChild(journalEl);
//   }
// }
var testDropValue = function() {
  var dropDownValue = document.getElementById('dropdown').value;
  // var emptyList = [];
  if (dropDownValue == null) {
    alert('There is nothing to submit! Head to the Equip tab to get a list started');
  } else {
    var emptyList = [];
    for (var i = 0; i < allTrips[dropDownValue].list.length; i++) {
      emptyList.push(allTrips[dropDownValue].list[i]);
      var equipEl = document.createElement('li');
      equipEl.textContent = emptyList[i];
      equipList.appendChild(equipEl);
    }
    ulEquipList.appendChild(equipList);
  }
}

submit.addEventListener('click', handleSubmitClick);
var handleSubmitClick = function(event) {
  testDropValue();
  pastLists.removeAttribute('hidden');
}

// if (place.length > 0) { //local storage
//   place = JSON.parse(savePlace);
//   extraStuff = JSON.parse(saveExtraStuff);
//   console.log(place);
//   console.log(tripDetails);
//   console.log(extraStuff);
// } else {
//   console.log('storage empty yo, initializing!!!!!');
//   localStorage.setItem('placePersist', JSON.stringify(place));
//   localStorage.setItem('detailsPersist', JSON.stringify(tripDetails));
//   localStorage.setItem('extraPersist', JSON.stringify(extraStuff));
// }


var handleSaveClick = function(event) {
  renderJournal();
}
// var handleDeleteClick = function(event) {
//   console.log('deleting local storage!');
//   localStorage.clear();
// }
pastLists.addEventListener('submit', handleSaveClick); //event listener
submit.addEventListener('click', handleSubmitClick);
// deleted.addEventListener('click', handleDeleteClick);
