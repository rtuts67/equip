'use strict'

var pastLists = document.getElementById('past-lists');
var saveButton = document.getElementById('save-past-list');

saveButton.addEventListener('click', handleSaveClick); //event listener
console.log('running');
var handleSaveClick = function(event) {
  console.log('I was clicked. Save these forms');
  event.preventDefault();
}
