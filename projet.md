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
- inclure des icones (Fontawesome) pour symboliser Rocket et lancements // non retenu

#### Position landpad & launchpad sur une carte
- affichage lié au back-end 
    - position de la carte : center // width : 50% max // occupe 1/3

#### Filtre Fusées par Landpad & Launchpad
- liste déroulante Landpad // infos non trouvé pour les landpads
    - choix des fusées et impact sur la carte (pas demander mais voir si possible) // pas eu le temps a travailler sur V2
- liste déroulante Launchpad // ok fonctionnel mais code à améliorer pour le rendre plus dynamique sur V2
    - choix des fusées et impact sur la carte (pas demander mais voir si possible) // pas eu le temps a travailler sur V2

#

Connexion API et requêtes // ok
#### Type de rockets & nombre de lancements 
- cards créé sous forme de component avec boucle foreach: données via API
    - rockets (tableau simple indexé avec le type de fusées) // info sur nbr lancement par an non trouvée
    
 
#### Position landpad & launchpad sur une carte
- utilisation librairie leaflet // ok
    

#


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
