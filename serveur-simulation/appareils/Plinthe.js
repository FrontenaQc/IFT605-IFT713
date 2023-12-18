class Plinthe {
  constructor (id, description, location, desiredTemperature, actualTemperature, system) {
    this.id = id;
    this.description = description;
    this.location = location;
    this.desiredTemperature = desiredTemperature;
    this.actualTemperature = actualTemperature; //sensor
    this.system = system; //Celcius or Fahrenheit
    this.unit = "Celcius"
  }

  getDataFromSensor(){
    let num = Math.random();
    if(num >.5){num = 0-num}
    this.actualTemperature= (num*0.05+1)*this.actualTemperature
    return this.actualTemperature;
  }

  toJSON () {
    return {
      'id': this.manches,
      'description': this.description,
      'location': this.location,
      'desiredTemperture': this.desiredTemperature,
      'actualTemperature': this.actualTemperature,
      'system': this.system
    };
  }
}

module.exports = Plinthe;
