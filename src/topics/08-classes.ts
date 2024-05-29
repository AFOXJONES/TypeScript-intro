export class Person{
    // public name:string ;
    // public address:string;



    constructor(public name:string, public address:string='No address'){
        // this.name=name;
        // this.address=address
    }
}

export class Hero extends Person{

    constructor(
        public alterEgo:string,
        public age:number,
        realName:string
    ){
       super(realName,'New York');
    }
}

const ironman=new Person("pepe","spain");
const ironman2=new Hero("asdasd",45,"spasdasain");

console.log(ironman);

console.log(ironman2);