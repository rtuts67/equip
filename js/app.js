
// FINAL ARRAY
var fullArray = [];

var essentials = [
  'Knife or Multitool',
  'Firestarter and Matches',
  'Map',
  'Compass',
  'First Aid Kit',
  'Flashlight',
  'Sun Protection (hat, sunglasses, sunscreen)',
  'Whistle',
  'Extra Clothing (hat, gloves, socks, underwear)',
  'Extra Food (Energy Bar or Gel)'
];

var activityArray = [new Activity('Hiking', 'bwHiking.png'), new Activity('Mountaineering', 'bwMountaineering.png'), new Activity('Backcountry Snowboarding', 'bwSnowboard.png'), new Activity('Backcountry Skiing', 'bwSki.png'), new Activity('Car Camping', 'bwCarCamping.png')];

// ACTIVITY CONSTRUCTOR
function Activity(names, src) {
  this.names = names;
  this.src = 'img/icons/' + src;
  fullArray.push(this);
};

// CREATE ACTIVITY ICONS
var iconHike, iconMount, iconSnowboard, iconSki, iconCamp;
function icons() {
  // HIKING
  iconHike = document.getElementById('hiking');
  hiking.src = activityArray[0].src;
  // MOUNTAINEERING
  iconMount = document.getElementById('mountaineering');
  mountaineering.src = activityArray[1].src;
  // SNOWBOARDING
  iconSnowboard = document.getElementById('backcountrySnowboarding');
  backcountrySnowboarding.src = activityArray[2].src;
  // SKIING
  iconSki = document.getElementById('backcountrySkiing');
  backcountrySkiing.src = activityArray[3].src;
  // CAMPING
  iconCamp = document.getElementById('carCamping');
  carCamping.src = activityArray[4].src;
}
icons();

iconHike.addEventListener('click', handleHike);

function handleHike() {
  alert('fill hike info')
}
