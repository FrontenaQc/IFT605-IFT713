class Deshumidificateur {
  constructor (id, description="", location="", niveauHumiditeDesire, niveauHumidite, niveauEauDuBac) {
    this.id = id;
    this.description = description;
    this.location = location;
    this.niveauHumidite = niveauHumidite; //Sensor
    this.niveauHumiditeDesire = niveauHumiditeDesire; //Préférence de l'utilisateur
    this.niveauEauDuBac = niveauEauDuBac; //A 100% le bac est plein et le déshumidificateur ne marchera plus. Plus le niveau d'humidite est elevé, plus il doit se remplir vite.
    this.unit = "%";
    //this.joueur_au_service = Math.floor(Math.random() * 2);
  }

  //Si le niveauHumiditeDesire est plus grand que le niveauHumidite alors le Deshumidicateur ne doit plus être en fonction.
  //S'il n'est plus en fonction, sont effecteur ne doit plus fonctionner, seulement le sensor.

  setNiveauHumiditeDesire(new_niveau){
    this.niveauHumiditeDesire = new_niveau;
  }

  changeLocation(new_location){
    this.location = new_location;
  }

  //TODO: Revoir la logique ici.
  fonctionne(){
    return this.niveauHumiditeDesire > this.niveauHumidite
  }

  getDataFromSensor(){
    let num = Math.random();
    if(num >.5){num = 0-num}
    this.niveauHumidite= (num*0.05+1)*this.niveauHumidite
    return this.niveauHumidite;
  }

  //Courbe de variation de la temperature.

  //jouerTour () {
  //  let contestationReussi = false;
  //  if ((Math.random() * 100) < 3) { // 3% de contestation
  //    if (!Partie.contester()) {
  //      const contestant = Math.floor(Math.random() * 2);
  //      this.constestation[contestant] = Math.max(0, this.constestation[contestant] - 1);
  //      console.log('contestation echouee');
  //    } else {
  //      contestationReussi = true;
  //      console.log('contestation reussie');
  //    }
  //  }
//
  //  if (!contestationReussi) {
  //    this.pointage.ajouterPoint(Math.floor(Math.random() * 2));
  //  }
  //  this.temps_partie += Math.floor(Math.random() * 60); // entre 0 et 60 secondes entre chaque point
  //  this.vitesse_dernier_service = Math.floor(Math.random() * (250 - 60 + 1)) + 60; // entre 60 et 250 km/h
  //  this.nombre_coup_dernier_echange = Math.floor(Math.random() * (30 - 1 + 1)) + 1; // entre 1 et 30 coups par échange
  //}
//
  //static contester () {
  //  return (Math.random() * 100) > 25; // 75% de chance que la contestation passe
  //}
//
  //changerServeur () {
  //  this.joueur_au_service = (this.joueur_au_service + 1) % 2;
  //}
//
  //nouvelleManche () {
  //  this.constestation = [3, 3];
  //}
//
  estPlein () {
  return this.niveauEauDuBac >= 99; // 99%
  }

  toJSON () {
    return {
        "id": this.id,
        "description": this.description,
        "location": this.location,
        "niveauHumidite": this.niveauHumidite,
        "niveauHumiditeDesire": this.niveauHumiditeDesire,
        "niveauEauDuBac": this.niveauEauDuBac
    };
  }
}
module.exports = Deshumidificateur;
