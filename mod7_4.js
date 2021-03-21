// parent class with properties and methods
function Devise(name) {

  this.name = name;
  this.material = 'aluminium';
  this.color = 'grey';
  this.powerSource = 'network';

}

Devise.prototype.putOn = function() {

  console.log(this.name + ' is ON.');

}

Devise.prototype.putOff = function() {

  console.log(this.name + ' is OFF.');

}

// class for big devise
function BigDevice(name) {

  this.name = name;
  this.power = '700 W';

}

BigDevice.prototype = new Devise();

BigDevice.prototype.brightness = function() {

  let brightness = +prompt('Enter brightness', 10);
  console.log(this.name + ' has brightness is ' + brightness + '. Power: ' + this.power + '.');

}

BigDevice.prototype.setText = function() {

  let text = prompt('Enter text', 'abc');
  console.log(this.name + ' text: ' + text + '.');

}

const computer = new BigDevice ('computer');

computer.putOn();
computer.brightness();
computer.setText();
computer.putOff();


// class for small devise
function SmallDevice(name) {

  this.name = name;
  this.power = '80 W';

}

SmallDevice.prototype = new Devise();

let count = 1;
SmallDevice.prototype.changeBulb = function() {

  console.log(this.name + ' light bulb is changed (' + count + ' time).');
  ++count;

}

const tableLamp = new SmallDevice ('table lamp');
tableLamp.changeBulb();
tableLamp.changeBulb();