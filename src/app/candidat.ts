export class candidat{
   
    nom:string
    prenom:string
    email:string
    numcin:string
    photo:File
    cv:File
    mpd:string
    constructor(nom:string,
        prenom:string,
        email:string,
        numcin:string,
        photo:File,
        cv:File,
        mpd:string,
        )
        {
            this.nom=nom
            this.prenom=prenom
            this.email=email
            this.numcin=numcin
            this.photo=photo
            this.cv=cv
            this.mpd=mpd
        }
}