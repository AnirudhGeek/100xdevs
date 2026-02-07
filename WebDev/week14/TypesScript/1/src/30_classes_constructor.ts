

class UserN15 {
    id : string;
    name : string;
    email ?: string;
    createAt : Date = new Date()   //init at declaration => OK

    constructor(id : string,name : string , email ?: string ){
        //assing all required fields here
        this.id = id
        this.name = name
        if(email){
            this.email = email
        }
    }
}

const result4 = new UserN15("1","Anirudh")
const result5 = new UserN15("2","John","test@gmail.com")


// this below one is the bad practice
// class Bad {
//     a : string
//     constructor(){}
// }