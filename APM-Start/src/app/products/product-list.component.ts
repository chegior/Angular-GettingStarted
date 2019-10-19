import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'; // import the INTERFACE
import { ProductService } from './product.service';

@Component({//DECLARATOR
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})


export class ProductListComponent implements OnInit{
    pageTitle: string ='Product List - ACME';
    imageWidth: number = 50;
    imageMarging: number = 2;
    showImage:boolean =false;
    //listFilter: string ='cart';
    _listFilter:string;
    errorMessage: string;

    get listFilter():string{
        return this._listFilter;
    } 

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.product;
    }

    filteredProducts: IProduct[];
    product: IProduct[] = [

    ];

    constructor(private productService:ProductService){
        
        

    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string):IProduct[]{
        filterBy = filterBy.toLowerCase();
        
        return this.product.filter((prod:IProduct)=>
     
            prod.productName.toLocaleLowerCase().indexOf(filterBy) !==-1, 
        );
        
    }

    toggleImage (): void {
        this.showImage = !this.showImage;

    }
    ngOnInit() : void{
            this.productService.getProducts().subscribe(
            products =>{ 
                this.product = products;
                this.filteredProducts = this.product;
            
            error=> this.errorMessage =<any>error}
        );
        
    }




}
//exporting the calss so is available to other 
/*interface a typescript*/