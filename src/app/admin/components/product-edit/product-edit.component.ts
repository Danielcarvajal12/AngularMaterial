import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidatos } from './../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor( 
    private fromBuilder: FormBuilder, 
    private productsService: ProductsService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product).subscribe((newproduct) => {
        console.log(newproduct);
      });
    }
  }

  private buildForm() {
    this.form = this.fromBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidatos.PrecioCorrecto]],
      image: ['', []],
      description: ['', [Validators.required]]
    });
  }

}
