class Ampoule {
  constructor (id, description, location, luminositePreference = 100, isOn = false, luminositeSensor = 0) {
    this.id = id;
    this.description = description;
    this.location = location;
    this.isOn = isOn; // on/off
    this.luminositePreference = luminositePreference;  // 0-100%
    this.luminositeSensor = luminositeSensor; // 0-100%
  }

  getDataFromSensor(){
   return this.luminositeSensor;
  }

  toggle(){
    if(!this.isOn){ this.turnOn();}
    else { this.turnOff();}
  }

  turnOn(){
    this.isOn = true;
    this.luminositeSensor = this.luminositePreference;
  }

  turnOff(){
    this.isOn = false;
    this.luminositeSensor =0;
  }

  toJSON () {
    return {
      'id': this.manches,
      'description': this.description,
      'location': this.location,
      'isOn': this.isOn,
      'luminositePreference': this.luminositePreference,
      'luminositeSensor': this.luminositeSensor
    };
  }
}

module.exports = Ampoule;
