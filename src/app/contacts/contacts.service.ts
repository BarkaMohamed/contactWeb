import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class ContactsService {

    constructor(private http:Http) {

    }

getAllContacts(){
 return this.http.get("http://localhost:8080/chercherContact?mc=").map(response=>response.json()) ;
}
search(cle,numPage){
return  this.http.get("http://localhost:8080/chercherContact?mc="+cle+"&page="+numPage).map(response=>response.json());
}
    chercher(cle){

        return  this.http.get("http://localhost:8080/chercherContact?mc="+cle).map(response=>response.json());



    }

getContact(id){
    return this.http.get("http://localhost:8080/contact/"+id).map(response=>response.json());

}
    removeContact(id){
        return this.http.delete("http://localhost:8080/contact/"+id);
    }
    save(contact){
        return this.http.post("http://localhost:8080/contact",contact);
    }
    update(contact){
        return this.http.put("http://localhost:8080/contact/"+contact.id,contact);
    }
}