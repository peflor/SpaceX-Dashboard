# SpaceX Project

construire un Dashboard en utilisant l'API SpaceX

Date de remise du Projet : 4 Mai


## Objectif :

Utilisation API SpaceX

lien de la doc : https://github.com/r-spacex/SpaceX-API


Données à afficher et demandée :
- Le type de rockets et le nombre de lancement par an

- La position des landpad et des launchpad sur une carte

- Filtrer les fusées par landpad et par launchpad

- Et/Ou toutes autres fonctionnalités que tu trouveras cool et intéressantes !
#

## FRONT-END
#### Type de rockets & nombre de lancements 
- inclure des icones (Fontawesome) pour symboliser Rocket et lancements

#### Position landpad & launchpad sur une carte
- affichage lié au back-end 
    - position de la carte : center // width : 50% max

#### Filtre Fusées par Landpad & Launchpad
- liste déroulante Landpad 
    - choix des fusées et impact sur la carte (pas demander mais voir si possible)
- liste déroulante Launchpad 
    - choix des fusées et impact sur la carte (pas demander mais voir si possible)

#### Autres fonctionnalités
- A définir

#

## BACK-END
Connexion API et requêtes
#### Type de rockets & nombre de lancements 
- Tableaux à créer : données via API
    - rockets (tableau simple indexé avec le type de fusées)
    - numbersOfLaunch (tableau simple avec nbr lancement)
    - Ou tableau Associatif ["type" =>"nameRockets" , "number" => "numberOfLaunch"]
        - créer peut etre une boucle pour recuperer les types & nbr de lancements et les push dans le tableau requête

#### Position landpad & launchpad sur une carte
- Tableau Associatif Multidimension  Landpad ["name"=>"nomDuLandpad" , "position" => "coordonnées", "typeFusées" => ["nomDesFusées]] 
    
- Tableau Associatif Multidimension  Launchpad ["name"=>"nomDuLaunchpad" , "position" => "coordonnées", "typeFusées" => ["nomDesFusées]]

- chercher comment positionner sur carte & inserer icone symbole
- pour la carte:
    - https://www.frugalprototype.com/leaflet-angular/
    - https://www.youtube.com/watch?v=NACSd_UxIBc&list=PLs_WqGRq69Ui25g61bB_D-9xKbHyjlw4g&index=3
    
#### Filtre Fusées par Landpad & Launchpad
 - choix des fusées et impact sur la carte
     - fonction if ou switch en fonction de la fusée choisie on recupere ses coordonnées pour les afficher sur la carte

    [ ] Faire un affichage simple en choisissant le landpad, la liste des fusées correspondantes apparaissent

    [ ] Bonus car je ne pense pas que ce soit demandé mais c'est mieux quand on choisit le type de fusées elle apparaissent sur la carte. A voir une fois l'API assimilée.
    

#### Autres fonctionnalités
- A définir

#
# TO DO
- comprendre le fonctionnement de l'API
- Définir si utilisation PHP ou Javascript
- Chercher méthode pour affichage de carte avec données dynamique
- Bonus: Ajouter des fonctionnalités Cool & FUN


# Ressources
- lien API Rockets:
    - https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg
- lien API Lancement :
    - https://api.spacexdata.com/v5/launches
- lien API Landpads :
    - https://api.spacexdata.com/v4/landpads
- lien API Launchpads:
    - https://api.spacexdata.com/v4/launchpads
- lien API Roadster :
    - https://api.spacexdata.com/v4/roadster

# Amelioration a Apporter
- nbr de tir de rocket / an / rocket