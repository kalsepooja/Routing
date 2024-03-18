import { Injectable } from '@angular/core';
import { Iproducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArray : Array<Iproducts>= [
    {
      pName: 'samsung m31',
      pId: '123',
      pStatus: 'in progress'
    },
    {
      pName: 'apple ',
      pId: '124',
      pStatus: 'delivered'
    },
    {
      pName: 'nokia',
      pId: '125',
      pStatus: 'dispatched'
    },

  ]

  constructor() { };

  fetchAllProduct(): Array<Iproducts>{
    return this.productArray
  }
}
