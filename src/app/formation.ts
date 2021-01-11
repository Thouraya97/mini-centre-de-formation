import { Mock } from 'protractor/built/driverProviders';

export class formation{
    id:number;
    titre:string;
    description :string;
    changehorraire:number
     programme:string;
     niveau:string
    listecles:String;
    constructor(titre:string,description :string, 
        changehorraire:number, programme:string,
        niveau:string, listecles:String,id:number){
  this.id=id;
 this.titre=titre
this.description=description;
this.changehorraire=changehorraire;
this.programme=programme;
this.niveau=niveau;
this.listecles=listecles;
    }
}