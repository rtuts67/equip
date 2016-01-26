'use strict'

var pastLists = document.getElementById('past-lists'); //DOM ids
var saveButton = document.getElementById('save-past-list');
var deleted = document.getElementById('delete');
var journalEntryData = [];
var forumData = localStorage.getItem('infoPersist');

if (forumData) { //local storage
  journalEntryData = JSON.parse(forumData);
} else {
  console.log('storage empty yo, initializing!!!!!');
  localStorage.setItem('infoPersist', JSON.stringify(journalEntryData));
}

function TripLog(where, details, extra) { //generates info for triplog
  this.where = where;
  this.details = details;
  this.extra = extra;
  this.renderJournal();
}

TripLog.prototype.renderJournal = function() {
  var journalEl = document.createElement('li');
  journalEl.innerHTML = '<ul><li>Destination: ' + this.where + '</li><li>Comments: ' + this.details + '</li><li>Whish I\'d brought: ' + this.extra + '</li></ul><br>';
  return journalEl;
}

var renderAllJournals = function() {
  journalEntries.innerHTML = ''
  journalEntryData.forEach(function(tripLog) {
    journalEntries.appendChild(tripLog.renderJournal());
  });
}

var handleSaveClick = function(event) {
  event.preventDefault();
  var where = event.target.whereTo.value; //form data
  var details = event.target.detail.value;
  var extra = event.target.extras.value;

  var newJournal = new TripLog(where, details, extra);

  event.target.whereTo.value = null; //clear forms
  event.target.detail.value = null;
  event.target.extras.value= null;

  journalEntryData.push(newJournal);
  renderAllJournals();
  localStorage.setItem('infoPersist', JSON.stringify(journalEntryData));
}
var handleDeleteClick = function(event) {
  console.log('deleting local storage!');
  localStorage.clear();
}
pastLists.addEventListener('submit', handleSaveClick); //event listener
deleted.addEventListener('click', handleDeleteClick);
