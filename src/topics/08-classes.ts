export class Person{
    public name:string ;
    public address:string;

    constructor(){
        this.name="Sin nombre";
        this.address="Spain"
    }
}



const ironman=new Person();

console.log(ironman);