
export interface Product{
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
// function taxCalculation(options:TaxCalculationOptions):[number,number]{
    // function taxCalculation({tax,products}:TaxCalculationOptions):[number,number]{
        export function taxCalculation(options:TaxCalculationOptions):[number,number]{
            const {tax,products}=options;
    let total=0;
    // options.products.forEach(({price}) => {
        products.forEach(({price}) => {
        total+=price;
    });
    // return [total,total*options.tax];
    return [total,total*tax];
}


const shoppingCart=[phone,tablet];


const [total,taxTotal] = taxCalculation({
    products:shoppingCart,
    //al tener el mismo nombre se coge automaticamente la variable, se asume 
    tax:0.15
})

console.log('Total',total);
console.log('Tax',taxTotal);

//TAREA
//Desestructuracion en tiodo el ejercicios hasta donde se pueda


export{};