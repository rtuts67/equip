'use strict'

var allTripsArray = [];
var placeArray = [];
var detailsArray = [];
var extraStuffArray = [];

var pastLists = document.getElementById('past-lists'); //DOM ids
var submit = document.getElementById('submit');
var saveButton = document.getElementById('save-past-list');
var deleted = document.getElementById('delete');
var selectAnother = document.getElementById('selectAnother');

var savedTripType = localStorage.getItem('totalTrips');
var savedPlace = localStorage.getItem('placePersist');
var savedDetails = localStorage.getItem('detailsPersist');
var savedExtraStuff = localStorage.getItem('extraStuffPersist');

if (savedPlace) {
  placeArray = JSON.parse(savedPlace);
  detailsArray = JSON.parse(savedDetails);
  extraStuffArray = JSON.parse(savedExtraStuff);
} else {
  console.log('storage is empty for these arrays, initializing!');
}
if (savedTripType) { //test localStorage
  allTripsArray = JSON.parse(savedTripType);
  console.log(allTripsArray);
} else {
  alert('You have no saved lists. Click on the Equip tab to get started!')
}
function renderJournal() {
  event.preventDefault();
  var where = event.target.whereTo.value; //form data
  var details = event.target.detail.value;
  var extra = event.target.extras.value;
  placeArray.push(where);
  detailsArray.push(details);
  extraStuffArray.push(extra);

  event.target.whereTo.value = null; //clear forms
  event.target.detail.value = null;
  event.target.extras.value= null;
  localStorage.setItem('placePersist', JSON.stringify(placeArray));
  localStorage.setItem('detailsPersist', JSON.stringify(detailsArray));
  localStorage.setItem('extraStuffPersist', JSON.stringify(extraStuffArray));
  location.reload(false);
}
function addInput() {
  var dropdown = document.getElementById('dropdown');
  for(var i = 0; i < allTripsArray.length; i ++) {
    var el = document.createElement("option");
    el.textContent = allTripsArray[i].name;
    el.value = i;
    dropdown.appendChild(el);
  }
}
addInput();

var makePastLists = function() {
  var dropDownValue = document.getElementById('dropdown').value;
  var journalEntries = document.getElementById('journalEntries');
  journalEntries.innerHTML = "";

  //Destination render:
  var destination = document.createElement('h5');
  destination.textContent = 'Destination:';
  journalEntries.appendChild(destination);
  var inputDestination = document.createElement('p');
  inputDestination.textContent = placeArray[dropDownValue];
  journalEntries.appendChild(inputDestination);

  //Trip Details render:
  var tripDetails = document.createElement('h5');
  tripDetails.textContent = 'Trip Details:';
  journalEntries.appendChild(tripDetails);
  var inputTripDetails = document.createElement('p');
  inputTripDetails.textContent = detailsArray[dropDownValue];
  journalEntries.appendChild(inputTripDetails);

  //Trip Details render:
  var wishIdBrought = document.createElement('h5');
  wishIdBrought.textContent = 'Wish I\'d Brought:'
  journalEntries.appendChild(wishIdBrought);
  var inputWish = document.createElement('p');
  inputWish.textContent = extraStuffArray[dropDownValue];
  journalEntries.appendChild(inputWish);
}

var testDropValue = function() {
  var equipList = document.getElementById('showEquipList');
  var ulEquipList = document.getElementById('ulEquipList');
  equipList.innerHTML = "";
  var dropDownValue = document.getElementById('dropdown').value;
  if (dropDownValue == null) {
    alert('There is nothing to submit! Head to the Equip tab to get a list started');
  } else {
    var emptyList = [];
    for (var i = 0; i < allTripsArray[dropDownValue].list.length; i++) {
      emptyList.push(allTripsArray[dropDownValue].list[i]);
      var equipEl = document.createElement('li');
      equipEl.textContent = emptyList[i];
      equipList.appendChild(equipEl);
    }
    ulEquipList.appendChild(equipList);
  }
}

var hasInfo = function() {
  var dropDownValue = document.getElementById('dropdown').value;
  if (placeArray[dropDownValue]) {
    makePastLists();
  } else {
    var journalEntries = document.getElementById('journalEntries');
    var equipList = document.getElementById('showEquipList');
    journalEntries.innerHTML = "";
    equipList.innerHTML = "";
    pastLists.removeAttribute('hidden');
  }
}

var handleSubmitClick = function(event) {
  testDropValue();
  hasInfo();
}
var handleSaveClick = function(event) {
  renderJournal();
}
var handleDeleteClick = function(event) {
  console.log('deleting local storage!');
  localStorage.clear();
}

pastLists.addEventListener('submit', handleSaveClick); //event listener
submit.addEventListener('click', handleSubmitClick);
deleted.addEventListener('click', handleDeleteClick);
