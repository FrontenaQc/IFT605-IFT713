# IFT605-IFT713

**Projet de session**
- Marc-Olivier Bergeron - berm3131
- Charles-Antoine Blanchard - blac2010
- Anthony Denis - dena2504

**Git**
- Aller dans votre dossier d'installation openHab.
- Supprimer le dossier conf/
- git init -b main
- git remote add origin https://github.com/FrontenaQc/IFT605-IFT713.git
- git pull origin main

**Serveur**
- Le serveur nodejs est dans le dossier simulation-serveur
- Nous simulons des appareils (Plinthe 0, Déshumidificateur 1)
- Routes http:localhost:3000/appareils       /appareils/:id
- npm install
- npm start
- Ctrl + c

**InfluxDB**
- Installer InfluxDB https://docs.influxdata.com/influxdb/v2/get-started/setup/
- Localhost:8086
- user: ift605
- organisation: IFT605
- Bucket: Projet
- Ajouter InfluxDB dans les addons de OpenHAB
- Configurer InfluxDB 
