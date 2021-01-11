
import {Injectable} from '@angular/core';
import { formation } from '../formation';
import { formateurs } from '../formateurs';
import { Session } from 'protractor';
import { sessionFormation } from '../sessionFormation';
import { sessionFormateur } from '../sessionFormateur';
import { session } from '../session';


@Injectable({
  providedIn: 'root'
})

export class IdbService {
  [x: string]: any;

constructor() {
}

public createdatabase(){
 const tabAmdin=[{userName:"thouraya.zemzemi1997@gmail.com",password:"thou123"}]
  
       
  var db;
  var request = window.indexedDB.open("MyDatabase");
  request.onerror = function(event) {
    
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = function(event) {
    db = event.target.result;
   //db=request.result;
    console.log(db);
 
  };
  request.onupgradeneeded = function(event) {
  let db = event.target.result;
   //db=request.result;

    // on commence `a cr´eer les stores

var FormateurStore = db.createObjectStore("formateur", {  autoIncrement : true  });
FormateurStore.createIndex("numcin", "numcin", { unique: true });
FormateurStore.createIndex("nom", "nom", { unique: false });
FormateurStore.createIndex("prenom", "prenom", { unique:false });
FormateurStore.createIndex("email", "email", { unique: true });
FormateurStore.createIndex("mpd", "mpd", { unique: false });
FormateurStore.createIndex("cv", "cv", { unique: false });
FormateurStore.createIndex("specialité", "specialité", { unique: false });
FormateurStore.createIndex("tarifhorraire", "tarifhorraire", { unique: false });
FormateurStore.createIndex("numtlf", "numtlf", { unique: false });
FormateurStore.createIndex("photo", "photo", { unique: false });




var CandidatStore = db.createObjectStore("candidat", {   autoIncrement : true  });
CandidatStore.createIndex("nom", "nom", { unique: false });
CandidatStore.createIndex("prenom", "prenom", { unique: false });
CandidatStore.createIndex("email", "email", { unique: false });
CandidatStore.createIndex("numcin", "numcin", { unique: true });
CandidatStore.createIndex("photo", "photo", { unique: false });
CandidatStore.createIndex("cv", "cv", { unique: false });
CandidatStore.createIndex("mpd", "mpd", { unique: false });
var formationStore = db.createObjectStore("formation",{keyPath: 'id', autoIncrement: true });

formationStore.createIndex("titre", "titre", { unique: false });
formationStore.createIndex("description", "description", { unique: false });
formationStore.createIndex("changehorraire", "changehorraire", { unique: false });
formationStore.createIndex("programme", "programme", { unique: false });
formationStore.createIndex("niveau", "niveau", { unique: false });
formationStore.createIndex("listecles", "listecles", { unique: false });
var objectStoreSession = db.createObjectStore("session",{ keyPath: 'id', autoIncrement: true });
         objectStoreSession.createIndex("titre","titre",{unique : false})
         objectStoreSession.createIndex("date_debut","date_debut",{unique : false})
         objectStoreSession.createIndex("date_fin","date_fin",{unique : false})
         objectStoreSession.createIndex("plannig","plannig",{unique : false})

var objectStoreSessionFormation = db.createObjectStore("session_formation",{ keyPath: 'id', autoIncrement: true });
         objectStoreSessionFormation .createIndex("id_formation","id_formation",{unique : false})
         objectStoreSessionFormation .createIndex("titre_formation","titre_formation",{unique : false})
         objectStoreSessionFormation .createIndex("id_session","id_session",{unique : false})
         objectStoreSessionFormation .createIndex("titre_session","id_session",{unique : false})
        
         var objectStoreSessionFormateur = db.createObjectStore("session_formateur",{ keyPath: 'id', autoIncrement: true });
         objectStoreSessionFormateur.createIndex("email_formateur","email_formateur",{unique : false})
         objectStoreSessionFormateur.createIndex("name_formateur","name_formateur",{unique : false})
         objectStoreSessionFormateur.createIndex("id_session","id_session",{unique : false})
         objectStoreSessionFormateur.createIndex("titre_session","titre_session",{unique : false})
         

         var objectStoreSessionCandidat = db.createObjectStore("session_candidat",{ keyPath: 'id', autoIncrement: true });
         objectStoreSessionCandidat.createIndex("email_candidat","email_candidat",{unique : false})
         objectStoreSessionCandidat.createIndex("name_candidat","name_candidat",{unique : false})
         objectStoreSessionCandidat.createIndex("id_session","id_session",{unique : false})
         objectStoreSessionCandidat.createIndex("titre_session","titre_session",{unique : false})

var objectStoreadmin = db.createObjectStore("admin",{ autoIncrement : true });
       objectStoreadmin.createIndex("userName","userName",{unique : false})
       objectStoreadmin.createIndex("password","password",{unique : false})
       for (var i in tabAmdin){
          objectStoreadmin.add({userName:tabAmdin[i].userName,password:tabAmdin[i].password})
       }
    


};
};
public  addcandidat(tabformateur){
  
  var request = window.indexedDB.open("MyDatabase");
  
  request.onerror = function(event) {
    
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = function(event) {
   const  db = event.target.result;  
    console.log("succes"+db);
    var request = db.transaction(["candidat"],"readwrite").objectStore("candidat")
    for ( var i in tabformateur){
      request.add({"nom":tabformateur[i].nom,"prenom":tabformateur[i].prenom,
      "email":tabformateur[i].email,"numcin":tabformateur[i].numcin,
      "photo":tabformateur[i].photo,"cv":tabformateur[i].cv,
      "mpd":tabformateur[i].mpd});
    alert("sucess")
    
}

};


}


public  addforamteur(tabformateur){
  
  var request = window.indexedDB.open("MyDatabase");
  
  request.onerror = function(event) {
    
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = function(event) {
   const  db = event.target.result;  
    console.log("succes"+db);
    var request = db.transaction(["formateur"],"readwrite").objectStore("formateur")
    for ( var i in tabformateur){
      request.add({"numcin":tabformateur[i].numcin,"nom":tabformateur[i].nom,"prenom":tabformateur[i].prenom,
    "email":tabformateur[i].email,
    "mpd":tabformateur[i].mpd,
    "cv":tabformateur[i].cv,
    "specialité":tabformateur[i].specialité,
    "tarifhorraire":tabformateur[i].tarifhorraire,"numtlf":tabformateur[i].numtlf,
    "photo":tabformateur[i].photo});
    alert("sucess")
    
}

};


}
public  addformation(tabformationsotre){
  var db;
  var request = window.indexedDB.open("MyDatabase");
  
  request.onerror = function(event) {
    
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = function(event) {
   const  db = event.target.result;
   

   console.log("succes"+db);
    var request = db.transaction("formation","readwrite").objectStore("formation")
    for ( var i in tabformationsotre){
    
    request.add({"titre":tabformationsotre[i].titre,
    "description":tabformationsotre[i].description,
    "changehorraire":tabformationsotre[i].changehorraire,"programme":tabformationsotre[i].programme,
    "niveau":tabformationsotre[i].niveau,"listecles":tabformationsotre[i].listecles});
}
};
}
addSession(addItem) {
  let request = window.indexedDB.open("MyDatabase")

  request.onerror = function(event) {
     console.log("error: ");
  };
  
  request.onsuccess = function(event) {
    const db =event.target.result;
     console.log("success: "+ db);
  
      var request = db.transaction(["session"], "readwrite").objectStore("session")
      for (var i in addItem){
         request.add({"titre":addItem[i].titre,"date_debut":addItem[i].date_debut,
         "date_fin":addItem[i].date_fin,"plannig":addItem[i].plannig });

      }
  };
 }
listeFormation() {
  const allItem=[];
  let request = window.indexedDB.open("MyDatabase")
 
  request.onerror = function(event) {
     console.log("error: ");
  };
  
  request.onsuccess = function(event) {
     const db = event.target.result;
     //console.log("success: "+ db);
  
    var objectStore = db.transaction(["formation"]).objectStore(["formation"]);

    objectStore.openCursor().onsuccess = function(event) {
      var cursor =this.result;
      if (cursor) {
       allItem.push(new formation(cursor.value.titre,
        cursor.value.description,
            cursor.value.changehorraire,
            cursor.value.programme,
            cursor.value.niveau,
            cursor.value.listecles,cursor.key)) 
            console.log(allItem);
            
                           
        cursor.continue();
      }
      else {
        console.log
        ("No more entries!");
      }
    };
    
  
  };
return allItem
 }
 listesformateurs() {
  const allItem=[];
  let request = window.indexedDB.open("MyDatabase")
 
  request.onerror = function(event) {
     console.log("error: ");
  };
  
  request.onsuccess = function(event) {
     const db = event.target.result;
     //console.log("success: "+ db);
  
    var objectStore = db.transaction("formateur").objectStore("formateur");

    objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
       allItem.push(new formateurs(cursor.value.numcin,cursor.value.nom,
            cursor.value.prenom,
            cursor.value.email,
            cursor.value.mpd,
            cursor.value.cv,
            cursor.value.specialité,
            cursor.value.tarifhorraire,cursor.value.numtlf,cursor.key)) 
            console.log(allItem);
            
                           
        cursor.continue();
      }
      else {
        console.log
        ("No more entries!");
      }
    };
    
  
  };
return allItem
 }
 getsession() {
  const allItem=[];
  let request = window.indexedDB.open("MyDatabase")
 
  request.onerror = function(event) {
     console.log("error: ");
  };
  
  request.onsuccess = function(event) {
     const db = event.target.result;
     //console.log("success: "+ db);
  
    var objectStore = db.transaction(["session"]).objectStore(["session"]);

    objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
       allItem.push(new  session
        (cursor.value.titre,cursor.value.date_debut,cursor.value.date_fin,
        cursor.value.plannig)) 
            console.log(allItem);
            
                           
        cursor.continue();
      }
      else {
        console.log
        ("No more entries!");
      }
    };
    
  
  };
return allItem
 }
getAdmin(userName,password){

  
  let request = window.indexedDB.open("MyDatabase",1)
 
  request.onerror = function(event) {
     console.log("error: ");
  };
  
  request.onsuccess = function(event) {
     const db =event.target.result;
     console.log("success: "+ db);
  
  
    var transaction =db.transaction(["admin"]);
    var objectStore = transaction.objectStore("admin");
    
    var index = objectStore.index("userName");
    index.get(userName).onsuccess = function(event) {
 
       var indexpassword=objectStore.index("password")
       
       indexpassword.get(password).onsuccess=function(event){
 
          sessionStorage.setItem("sessionAdmin","active")
         console.log("thouraya");
         
       };
      
    };
   
  };
 
 }

 getSearchFormation(search){
  let formationItem=[]
    let request = window.indexedDB.open("MyDatabase")
   
    request.onerror = function(event) {
       console.log("error: ");
    };
    
    request.onsuccess = function(event) {
       const db =this.result;
       console.log("success: "+ db);
    
    
      var transaction =db.transaction(["formation"]);
      var objectStore = transaction.objectStore("formation");
      
      var index = objectStore.index("listecles");
      index.get(search).onsuccess = function(event) {
       formationItem.push(new formation(this.result.titre,
        this.result.description,
            this.result.changehorraire,
            this.result.programme,
            this.result.niveau,
            this.result.listecles,this.result.id));
          console.log(formationItem);
         };
        
    
     
    };
  return formationItem;
   
  }
  // bch na5ou les sessions l affecté fihom l formateur 
  getformationFormateur(email){

    let tab=[]
    let tabm=[]
    let request = window.indexedDB.open("MyDatabase")

request.onerror = function(event) {
 console.log("error: ");
};

request.onsuccess = function(event) {
const db =event.target.result;
 console.log("success: "+ db);
 var transaction =db.transaction(["session_formateur"]);
 var objectStore = transaction.objectStore("session_formateur");
 objectStore.openCursor().onsuccess = function(event) {
    var cursor =this.result;
      if (cursor) {
         if(email==cursor.value.email_formateur){
  
  
       tab.push({"id_session":cursor.value.id_session,"titre_session":cursor.value.titre_session})

    } 
    cursor.continue();   
      }
      else {
        console.log
        ("No more entries!");
      }
    };
 }
 return tab
}
    

  addSession_formateur(tab) {
       
    let request = window.indexedDB.open("MyDatabase")
  
    request.onerror = function(event) {
       console.log("error: ");
    };
    
    request.onsuccess = function(event) {
 const db =event.target.result;
       console.log("success: "+ db);
       var request = db.transaction(["session_formateur"], "readwrite").objectStore("session_formateur")

       
             for (var i in tab){
               request.add({"email_formateur":tab[i].email_formateur,
               "name_formateur":tab[i].name_formateur,
                 "id_session":tab[i].id_session,"titre_session":tab[i].titre_session})
       

           }
        
          }
       }
       addSession_candidat(tab) {
       
        let request = window.indexedDB.open("MyDatabase")
      
        request.onerror = function(event) {
           console.log("error: ");
        };
        
        request.onsuccess = function(event) {
     const db =event.target.result;
           console.log("success: "+ db);
           var request = db.transaction(["session_candidat"], "readwrite").objectStore("session_candidat")
                 for (var i in tab){
                   request.add({"email_candidat":tab[i].email_candidat,
                   "name_candidat":tab[i].name_candidat,
                     "id_session":tab[i].id_session,"titre_session":tab[i].titre_session})
           
    
               }
            
              }
           }
 getOneformation(id){
  let tabOne =[]
    
        let request = window.indexedDB.open("MyDatabase")
       
        request.onerror = function(event) {
           console.log("error: ");
        };
        
        request.onsuccess = function(event) {
           const db =this.result;
           console.log("success: "+ db);
        
           var objectStore = db.transaction("formation").objectStore("formation");
     
           objectStore.openCursor().onsuccess = function(event) {
           var cursor =event.target.result;
             if (cursor) {
                if(id==cursor.value.id){
                  tabOne.push(new formation(cursor.value.titre,
                    cursor.value.description,
                        cursor.value.changehorraire,
                        cursor.value.programme,
                        cursor.value.niveau,
                        cursor.value.listecles,cursor.key)) 
                        console.log(tabOne);
                        
                 
                          
                
                }
                cursor.continue();
  
             }
  
          
      
            };
          
         
        };
       return tabOne
       }
 getformateur(email,mpd){

  
  let request = window.indexedDB.open("MyDatabase",1)
 
  request.onerror = function(event) {
     console.log("error: ");
  };
  
  request.onsuccess = function(event) {
     const db =event.target.result;
     console.log("success: "+ db);
  
  
    var transaction =db.transaction(["formateur"]);
    var objectStore = transaction.objectStore("formateur");
    
    var index = objectStore.index("email");
    index.get(email).onsuccess = function(event) {
 
       var indexpassword=objectStore.index("mpd")
       
       indexpassword.get(mpd).onsuccess=function(event){
 
          //sessionStorage.setItem("sessionAdmin","active")
         console.log("thouraya");
         
       };
      
    };
   
  };
 
 }
 getcandidat(email,mpd){

  
  let request = window.indexedDB.open("MyDatabase",1)
 
  request.onerror = function(event) {
     console.log("error: ");
  };
  
  request.onsuccess = function(event) {
     const db =event.target.result;
     console.log("success: "+ db);
  
  
    var transaction =db.transaction(["candidat"]);
    var objectStore = transaction.objectStore("candidat");
    
    var index = objectStore.index("email");
    index.get(email).onsuccess = function(event) {
 
       var indexpassword=objectStore.index("mpd")
       
       indexpassword.get(mpd).onsuccess=function(event){
 
         // sessionStorage.setItem("sessionAdmin","active")
         console.log("thouraya");
         
       };
      
    };
   
  };
 
 }
 }
 