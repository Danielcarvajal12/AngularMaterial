import { Component, OnInit } from '@angular/core';
import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  productos: Observable<Product[]>;

  constructor(private cartService: CartService) { 
    this.productos = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
