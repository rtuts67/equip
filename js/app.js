
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

var hikeArray = ['Hiking Shoes/Boots', '1 Pair of Socks', '1 Pair of Underwear', '1 Shirt/Long­sleeve Shirt', '1 Pair of Shorts/Pants', '30-­40 Liter Backpack', 'Water Bottles'];


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
  for (var i = 0; i < hikeArray.length; i++) {
    essentials.push(hikeArray[i]);
  }
  console.log(essentials);
  var finalList = document.getElementById('finalList');
  var loadList = document.getElementById('loadList');

  for (var j = 0; j < essentials.length; j++) {
    var listArray = document.createElement('li');
    listArray.textContent = essentials[j];
    loadList.appendChild(listArray);
  }
  finalList.appendChild(loadList);

}
