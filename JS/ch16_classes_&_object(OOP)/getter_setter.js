class User{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value.length < 4){
            console.log("The name is too shrot");
            return;
        } 

        this._name = value;
    }
}

let user = new User("Nahid");
console.log(user.name);


user.name = "Nahid";
console.log(user);