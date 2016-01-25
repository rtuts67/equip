'use strict'

var pastLists = document.getElementById('past-lists'); //DOM ids
var saveButton = document.getElementById('save-past-list');
var commentData = [];

function TripLog(where, details, extra) { //generates info for triplog
  this.where = where;
  this.details = details;
  this.extra = extra;
  console.log(this.where);
  console.log(this.details);
  console.log(this.extra);
  commentData.push(this);
  this.renderJournal();
}

TripLog.prototype.renderJournal = function() {
  var journalEl = document.getElementById('journalEntries');
  journalEl.innerHTML = '<li>Destination: ' + this.where + '</li><li>Comments: ' + this.details + '</li><li>Whish I\'d brought: ' + this.extra + '</li>';
  return journalEl;
}

var handleSaveClick = function(event) {
  console.log('I was clicked. Save these forms');
  event.preventDefault();
  console.log(event.target);
  var where = event.target.whereTo.value; //form data
  console.log('after where');
  var details = event.target.detail.value;
  var extra = event.target.extras.value;

  var newList = new TripLog(where, details, extra);

  event.target.whereTo.value = null; //clear forms
  event.target.detail.value = null;
  event.target.extras.value= null;
}
pastLists.addEventListener('submit', handleSaveClick); //event listener
