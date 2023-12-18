const Deshumidificateur = require('./appareils/Deshumidificateur');
//const Partie = require('./Partie');
const Plinthe = require('./appareils/Plinthe');
const Ampoule = require('./appareils/Ampoule');

const modificateurVitesse = 0.5//Math.max(process.argv[2], 1);

const listeAppareils = [];

const plinthe = new Plinthe(id=0, description="Plinthe électrique", location="", desiredTemperature=28, actualTemperature=29, system="Celcius");
const deshumidificateur = new Deshumidificateur(id=1, "Déshumidificateur", location="", niveauHumiditeDesire=25, niveauHumidite=26, niveauEauBac=0);
const ampoule = new Ampoule(id=2, "Ampoule intelligence", location="", luminositePreference=100, isOn=false, luminositeSensor=0);

listeAppareils.push(plinthe);
listeAppareils.push(deshumidificateur);
listeAppareils.push(ampoule);

const demarrer = function () {
    for (const appareil in listeAppareils) {
      //if (listeAppareils[appareil].tick_debut === tick) {
        demarrerPartie(listeAppareils[appareil]);
      //}
    }
};

function demarrerPartie (appareil) {
  const timer = setInterval(function () {
    let data = appareil.getDataFromSensor();
    console.log(appareil.description," ",data, " ", appareil.unit ? appareil.unit : "")
    //if (partie.estTerminee()) {
    //  clearInterval(timer);
    //}
  }, Math.floor(1000 / modificateurVitesse));
}

module.exports = {};
module.exports.demarrer = demarrer;
module.exports.liste_appareils = listeAppareils;
