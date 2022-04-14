class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    };
    get online(){
        return this._online;
    }
    set online(value){

    }
    render(id){

    };
};