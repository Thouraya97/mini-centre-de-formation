export class formateur {
    public numcin:string
	public nom :String
public prenom : string
    public email:string
    public mpd:string
    public cv:string
public specialité:string
public tarifhorraire:number
public numtlf:number
public photo:number
	
    constructor(  numcin:string,
         nom :String,
     prenom : string,
         email:string,
         mpd:string,
         cv:string,
     specialité:string,
     tarifhorraire:number,
     numtlf:number,
     photo:number){
this.numcin=numcin
this.nom=nom
this.prenom=prenom
this.email=email
this.mpd=this.mpd
this.cv=this.cv
this.specialité=this.specialité
this.tarifhorraire=tarifhorraire
this.numtlf=numtlf
this.photo=photo
    }
    
}
