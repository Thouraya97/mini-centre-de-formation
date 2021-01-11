export class formateurs{
nom:string;
prenom:string;
email:string;
numcin:number;
numtlf:number;
tarifhorraire:number;
photo:File;
cv:File;
mpd:String;
specialité:string;


    constructor(numcin:number,nom:string, prenom:string,email:string,mpd:String,
        cv:File,
        specialité:string,
        tarifhorraire:number,
        numtlf:number,
        photo:File){
 this.numcin=numcin;
this.nom=nom;
this.prenom=prenom
this.email=email
this.mpd=mpd
this.cv=cv
this.specialité=specialité
this.numtlf=numtlf
this.tarifhorraire=tarifhorraire
this.photo=photo


    }
}