import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productArr ! : Array<Iproducts>

  constructor(
    private _productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productArr = this._productService.fetchAllProduct()
  }

}
