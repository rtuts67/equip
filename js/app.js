
// FINAL ARRAY
var fullArray = [];
// DECLARING VARIABLES
var iconHike, iconMount, iconSnowboard, iconSki, iconCamp, essentials;

//
var activityItems = [
  ['Hiking Shoes/Boots', '1 Pair of Socks', '1 Pair of Underwear', '1 Shirt/Long­sleeve Shirt', '1 Pair of Shorts/Pants', '30-­40 Liter Backpack', 'Water Bottles'],
  ['Mountaineering Boots', 'Crampons', 'Ice Axe or Ice Tools', 'Helmet', 'Dry­treated Single Rope (30­-60 meters) (if protecting any pitches or roping up for glacier travel)', 'Harness', 'Pickets', 'Crevasse Rescue Kit (if crossing a glacier)', 'Light Alpine Climbing Rack (if climbing any rock)', 'Gaiters', 'Glacier Sunglasses or Goggles', 'GPS (recommended)', 'Emergency Locator Beacon (recommended)'],
  ['Snowboard/Splitboard', 'Snowboard Boots', 'Helmet', 'Trekking Poles', 'Avalanche Beacon', 'Snow Shovel', 'Avalanche Probe', 'Snow Study Kit', 'Snow Saw', 'Rutschblock Cord', 'Snowshoes/Skins'],
  ['Skis (Touring Setup)', 'Ski Boots', 'Helmet', 'Poles', 'Avalanche Beacon', 'Snow Shovel', 'Avalanche Probe', 'Snow Study Kit', 'Snow Saw', 'Rutschblock Cord', 'Skins'],
  ['Tent', 'Sleeping Pad', 'Sleeping Bag', 'Tarp', 'Portable Camping Stove', 'Cookware', 'Utensils for Cooking and Eating', 'Paper Plates', 'Paper Towels', 'Garbage Bags', 'Cooler and Ice', 'Water', 'Firewood (if fires allowed)', 'Fire Starter (matches, newspaper)', 'Bug repellent', 'Warm clothing (sleep clothes)', 'Swimwear and Towel (if camping near water/beach)']
];

//
var activityArray = [new Activity('Hiking', 'bwHiking.png'), new Activity('Mountaineering', 'bwMountaineering.png'), new Activity('Backcountry Snowboarding', 'bwSnowboard.png'), new Activity('Backcountry Skiing', 'bwSki.png'), new Activity('Car Camping', 'bwCarCamping.png')];

// ACTIVITY CONSTRUCTOR
function Activity(names, src) {
  this.names = names;
  this.src = 'img/icons/' + src;
  fullArray.push(this);
};

// CREATE ACTIVITY ICONS
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

// ACTIVITY EVENT LISTENERS
iconHike.addEventListener('click', function() {
  handleIcon(activityItems[0]);
});
iconMount.addEventListener('click', function() {
  handleIcon(activityItems[1]);
});
iconSnowboard.addEventListener('click', function() {
  handleIcon(activityItems[2]);
});
iconSki.addEventListener('click', function() {
  handleIcon(activityItems[3]);
});
iconCamp.addEventListener('click', function() {
  handleIcon(activityItems[4]);
});

// ACTIVITY EVENT HANDLER
function handleIcon(icon) {
  var finalList = document.getElementById('finalList');
  finalList.style.display = 'none';
  essentials = ['Knife or Multitool', 'Firestarter and Matches', 'Map', 'Compass', 'First Aid Kit', 'Flashlight', 'Sun Protection (hat, sunglasses, sunscreen)', 'Whistle', 'Extra Clothing (hat, gloves, socks, underwear)', 'Extra Food (Energy Bar or Gel)'];
  for (var i = 0; i < icon.length; i++) {
    essentials.push(icon[i]);
  }
}

// CREATE BUTTON
results.addEventListener('click', handleButton)
function handleButton() {
  var finalList = document.getElementById('finalList');
  var loadList = document.getElementById('loadList');
  for (var j = 0; j < essentials.length; j++) {
    var listArray = document.createElement('li');
    listArray.textContent = essentials[j];
    loadList.appendChild(listArray);
  }
  finalList.appendChild(loadList);
}
