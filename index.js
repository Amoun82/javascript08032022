// les objets

let user = {
    name : "stef",
    pseudo : "Amoun",
    age : 40,
    isConnected : false
};

let user1 = {
    name : "Marie",
    pseudo : "ange",
    age : 45,
    isConnected : false
};

let user2 = {
    name : "Romane",
    pseudo : "wolf",
    age : 28,
    isConnected : false
};

let user3 = {
    name : "Antoine",
    pseudo : "Alo",
    age : 26,
    isConnected : false
};

tableUser = [user,user1,user2,user3]

console.log(user.pseudo) ;

console.log(tableUser[3].age) ;

for(index of tableUser){
    console.log(index.name) ;
    console.log(index.pseudo) ;
    console.log(index.age) ;
    console.log(index.isConnected) ;
}

// les class
class voiture{
    constructor(marque,modele,puissance,couleur,electrique,accessoire){
        this.marque = marque ;
        this.modele = modele ;
        this.puissance = puissance ;
        this.couleur = couleur ;
        this.electrique = electrique ;
        this.accessoire = accessoire ;
    }
};


let voiture1 = new voiture("chevrolet","aveo",12,"noir",false,["volant","roues","moteur","vitre"]) ;

let voiture2 = new voiture("renault","r11",10,"rouge",false,["volant","roues","moteur","vitre"]) ;

let voiture3 = new voiture("ferrari",'lamborguini',500,"bleu",true,["volant","roues","moteur","vitre"]) ;

let voiture4 = new voiture("peugeot","405",50,"belge",true,["volant","roues","moteur","vitre"]) ;

let tableVoiture = [voiture1,voiture2,voiture3,voiture4] ;

console.log(tableVoiture) ;


for(index of tableVoiture){
    console.log(index) ;
    console.log(index.marque) ;
    console.log(index.modele) ;
    console.log(index.puissance) ;
    console.log(index.coueur) ;
    console.log(index.electrique) ;
    console.log(index.accessoire) ;
    for(index1 of index.accessoire){
        console.log(index1) ;
        for(index2 of index1)
            console.log(index2) ;   
    }
}


// les objets complexes
class armoire{
    constructor(nbreEtages,couleur,listeVetements,restePlace){
        this.nbreEtages = nbreEtages ;
        this.couleur = couleur ;
        this.listeVetements = listeVetements ;
        this.restePlace = restePlace ;
    }
};

let armoire1 = new armoire(5,"noir",["talon","écharpe","jupe"],true) ;
let armoire2 = new armoire(4,"rouge",["talon","écharpe","jupe"],true) ;
let armoire3 = new armoire(2,"marron",["talon","écharpe","jupe"],false) ;
let armoire4 = new armoire(1,"bleu",["talon","écharpe","jupe"],true) ;

class piece{
    constructor(superficie,listesMeubles,fenetre){
        this.superficie = superficie ;
        this.listesMeubles = listesMeubles ;
        this.fenetre = fenetre ;
    }
};

let piece1 = new piece(50,[armoire1,"petite table","table","des chaises"],true) ;
let piece2 = new piece(150,[armoire2,"petite table","table","des chaises"],true) ;
let piece3 = new piece(250,[armoire3,"petite table","table","des chaises"],true) ;
let piece4 = new piece(500,[armoire4,"petite table","table","des chaises"],false) ;


class appart{
    constructor(nom,nbrePieces,superficie,listesPieces,disponibleLocation){
        this.nom = nom ;
        this.nbrePieces = nbrePieces ;
        this.superficie = superficie ;
        this.listesPieces = listesPieces ;
        this.disponibleLocation = disponibleLocation ;
    }
};

let appart1 = new appart("appart Stef",5,2500,["salon","salle a manger",piece1,"salle de bain","WC"],false) ;
let appart2 = new appart("appart Romane",5,2500,["salon","salle a manger",piece2,"salle de bain","WC"],false) ;
let appart3 = new appart("appart Salim",5,2500,["salon","salle a manger",piece3,"salle de bain","WC"],false) ;
let appart4 = new appart("appart non loué",5,2500,["salon","salle a manger",piece4,"salle de bain","WC"],true) ;

class immeuble{
    constructor(nom,nbreEtage,nbreAppart,appart){
        this.nom = nom ;
        this.nbreEtage = nbreEtage ;
        this.nbreAppart = nbreAppart;
        this.appart = appart ;
    }
};

let immeuble1 = new immeuble("stef",5,10,appart1) ;
let immeuble2 = new immeuble("Romane",5,10,appart2) ;
let immeuble3 = new immeuble("Salim",5,10,appart3) ;
let immeuble4 = new immeuble("inconnu",5,10,appart4) ;
let immeuble5 = new immeuble("antoine",5,10,"en Construction") ;

let quartier = [immeuble1,immeuble2,immeuble3,immeuble4/*,immeuble5*/] ;

console.log(quartier) ;


for(index of quartier){
    console.log("l'immeuble :",index) ;
    console.log("l'appartement :",index.appart) ;
    console.log("les pièces : ",index.appart.listesPieces) ;
    console.log("les meubles :",index.appart.listesPieces[2].listesMeubles) ;
    console.log("dans l'armoire :",index.appart.listesPieces[2].listesMeubles[0].listeVetements) ;
}



// les fruits

class fruit{
    constructor(nom,couleur,pepin,taille,saison){
        this.nom = nom ;
        this.couleur = couleur ;
        this.pepin = pepin ;
        this.taille = taille ;
        this.saison = saison ;
    }
};

let fruit1 = new fruit("fraise","rouge",true,5,"printemps") ;

let fruit2 = new fruit("poire","vert",true,15,"automne") ;



// encore des class
class chien{
    constructor(nom,race,taille,poids,vaccine){
        this.nom = nom ;
        this.race = race ;
        this.taille = taille ;
        this.poids = poids ;
        this.vaccine = vaccine ;
        /* fonction abboyer de l'objet */
        this.abboyer = function abboyer() {
            console.log("Wouaf Wouaf") ;
            console.log('wouaf (nom) : ', this.nom) ;
            console.log('wouf (race) : ', this.race) ;
            console.log("wouf wouf (taille) : " , this.taille) ;
            console.log("waof (poids) : ", this.poids ) ;
            console.log("WOUUUU !! (aie) : vaccinée" , this.vaccine) ;
        };

        this.maigrir = function (nourriture) {

            if(nourriture === undefined || nourriture < 0){
                console.log("attention vous n'avez pas mis de valeur !!") ;
            }
            else{
                this.poids = this.poids - nourriture ;
                console.log(this.poids) ;
            }

        };

        this.test = function (){

            if(this.nom === this.race){
                console.log(`il y as un probleme dans l\'objets nom : ${this.nom} est le meme que race : ${this.race}`) ;
            }

        };

        this.modification = function (grandir){

            if(grandir === undefined){
                alert('attention a ce que vous faites') ;
            }else{
                this.taille += grandir ;
                this.abboyer() ;
            }

        };

    }
};



let pitbull = new chien ("kapi","pitbull",60,50,true) ;

let chowchow = new chien ("jaima","chowchow",90,40,true) ;

let orson = new chien ("orson","orson",50,20,true) ;

pitbull.abboyer() ;

chowchow.abboyer() ;



if(pitbull.vaccine === false){
    console.log('il est pas vaccinée',pitbull.vaccine) ;
}else{
    console.log('il est vaccinée',pitbull.vaccine) ;
}


pitbull.maigrir(-5) ;
pitbull.maigrir() ;
pitbull.maigrir() ;


orson.test() ;

orson.abboyer() ;

orson.modification(5) ;

// condition
let a = 30 ;

let b = 60 ;

if( a > b ){
    console.log('tout vas bien !!') ;
}else if( a === b ){
    console.log("ça va !!") ;
}else{
    console.log("on vas manger") ;
}


// autre exemple
a = 100 ;

b = '100' ;

let c ;

if(a === b){
    c = 200 ;
    console.log(c) ;
}else{
    c = 50 ;
    console.log(c) ;
}


// encore un autre exemple

let vehicule1 = {
    marque : 'chevrolet',
    modele : 'aveo',
    puissance : 150,
    couleur : "noir",
    disponible : false
};

let vehicule2 = {
    marque : 'renault',
    modele : 'clio',
    puissance : 100,
    couleur : 'rouge',
    disponible : false
};

console.log(vehicule1.disponible,vehicule2.disponible) ;


if(vehicule1.puissance !== vehicule2.puissance){
    vehicule1.disponible = true ;
    vehicule2.disponible = true ;
}

console.log(vehicule1,vehicule2) ;

// autre exemple
let tele1 = {
    taille : 15,
    marque : 'sony',
    smartTV : false,
    resolution : '3k',
    stock : true
}

let tele2 = {
    taille : 30,
    marque : 'Philipps',
    smartTV : true,
    resolution : '4k',
    stock : true
}

console.log(tele1.smartTV,tele2.smartTV) ;

if(tele1.taille === tele2.taille){
    tele1.stock = false ;
    tele2.stock = false ;
    console.log(tele1,tele2) ;
}else{
    tele1.smartTV = true ;
    tele2.smartTV = false ;
    console.log(tele1,tele2) ;
}