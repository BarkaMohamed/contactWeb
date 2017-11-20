export class ContactModel{
    private  dateNaissance;
    private photo;
    constructor(private nom:string, private prenom:string , private email:string , private tel:string){
    this.dateNaissance=null;
    this.photo=null;
    }


}