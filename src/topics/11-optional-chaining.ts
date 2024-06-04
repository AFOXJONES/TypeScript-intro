
export interface Passenger{
    name:string;
    children?:string[];
}

const passenger1:Passenger={
    name:'Álvaro',
}

const passenger2:Passenger={
    name:'Álvaro',
    children:['Natalia','Elizabeth'],
}

const printChildren=(passenger: Passenger)=>{

    // if(!passenger.children)return 0;


    const howManyChildren=passenger.children?.length || 0;

    console.log(passenger.name,howManyChildren);
}


printChildren(passenger2);
printChildren(passenger1);