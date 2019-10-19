
//this is the interface tha help STRONG TYPE, 
//this is a specification related set of properties and metho=ds
//interfaces are development time ONLY

export interface IProduct {
    productId:number;
    productName:string;
    productCode:string;
    releaseDate:string;
    price:number;
    description:string;
    starRating:number;
    imageUrl:string;

}
// export class Product implements IProduct {

//     constructor(
//        public productID:number,
//        public productName:string,
//        public productCode:string,
//        public releaseDate:string,
//        public price:number,
//        public description:string,
//        public starRating:number,
//        public imageUrl:string
       
//     )
//     calculateDiscount(percent: number):number {
//         return this.price = (this.price * percent /100);
//     }

// }

