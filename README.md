# EVOLVE

Webdocumentaire dans le cadre d'un projet d'école à HETIC 

## Installation du projet en local

##### Cloner le projet

<code>$ git clone https://github.com/Paulehair/php-react.git</code>

##### Lancer le serveur php

<code>$ cd php-react/server </code>
<code>$ php -S localhost:8000 </code>

##### Lancer le serveur node sur le localhost:3000

<code>$ cd php-react/client </code>
<code>$ npm install </code>
<code>$ npm start </code>

##### /!\ Attention

Pensez à vérifier la variable d'environnement $URL_API dans le fichier .env pour qu'elle pointe bien vers localhost:8000 si vous travaillez en local

## Fonctionnement et usage

##### Envoyer la data à l'API

Chaque fichier php dans le dossier server appelle une table de la base de donnée et renvoie toutes les données en format json.

###### Exemple 

<code>[
  {
    "id": "1",
    "title_part": "I / L’homme en pleine transformation",
    "title": "Ces algorithmes qui",
    "title_span": "détectent les maladies",
    "subtitle": ""}
    ]</code>
    
##### Recevoir la data depuis l'API

Dans le fichier /client/src/helpers/api.js des appels sont faits à l'url correspondant à la variable d'environnement (cf /client/.env) $URL_API. 

Chaque fonction de type fetch récupère la donnée et la renvoie en json. 

Dans chaque composant de type view, une fonction fetch est appelée pour passer la data à son state content.


## Architecture technique

![](https://i.imgur.com/6348jzm.png)
