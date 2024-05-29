export class Person{
    // public name:string ;
    // public address:string;



    constructor(public name:string, public address:string='No address'){
        // this.name=name;
        // this.address=address
    }
}

// export class Hero extends Person{

   


//     constructor(
//         public alterEgo:string,
//         public age:number,
//         realName:string
//     ){
//        super(realName,'New York');
//     }
// }


 //simpren tratar de hacer composicion antes que herencia
 export class Hero{

//    public person:Person;


    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
    //    this.person=new Person(realName)
    }
}

const tony=new Person('Tony stark','New yortks');


const ironman=new Hero("pepe",2,"pepe",tony);
// const ironman2=new Hero("asdasd",45,"spasdasain");

console.log(ironman);

console.log(tony);