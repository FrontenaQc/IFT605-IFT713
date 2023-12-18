const Deshumidificateur = require('./Deshumidificateur');
//const Partie = require('./Partie');
const Plinthe = require('./Plinthe');

const modificateurVitesse = 0.5//Math.max(process.argv[2], 1);

const listeAppareils = [];

const plinthe = new Plinthe(id=0, description="Plinthe électrique", location="", desiredTemperature=28, actualTemperature=29, system="Celcius");
const deshumidificateur = new Deshumidificateur(id=1, "Déshumidificateur", location="", niveauHumiditeDesire=25, niveauHumidite=26, niveauEauBac=0);

listeAppareils.push(plinthe);
listeAppareils.push(deshumidificateur);

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
    console.log(appareil.description," ",data," ", appareil.unit)
    //if (partie.estTerminee()) {
    //  clearInterval(timer);
    //}
  }, Math.floor(1000 / modificateurVitesse));
}

module.exports = {};
module.exports.demarrer = demarrer;
module.exports.liste_appareils = listeAppareils;
