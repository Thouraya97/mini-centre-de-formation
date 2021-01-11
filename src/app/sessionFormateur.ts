export class sessionFormateur{
    email_formateur:string
    name_formateur:string
    id_session:string
    titre_session:string
    constructor (email_formateur:string,
        name_formateur:string,
        id_session:string,
        titre_session:string){
            this.email_formateur=email_formateur
            this.name_formateur=name_formateur
            this.id_session=id_session
            this.titre_session=titre_session

        }
}