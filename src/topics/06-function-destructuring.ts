
interface Product{
    description:string;
    price:number;

}


const phone:Product={
    description:'Nokia A1',
    price:150.0
}

const tablet:Product={
    description:'Ipad air',
    price:250.0
}

interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}

function taxCalculation(options:TaxCalculationOptions):number[]{
    let total=0;
    options.products.forEach(product => {
        total+=product.price;
    });
    return [total,total*options.tax];
}


const shoppingCart=[phone,tablet];
const tax=0.15;

const result = taxCalculation({
    products:shoppingCart,
    //al tener el mismo nombre se coge automaticamente la variable, se asume 
    tax,
})

console.log('Total',result[0]);
console.log('Tax',result[1]);

//TAREA
//Desestructuracion en tiodo el ejercicios hasta donde se pueda