import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.css']
})
export class PurchaseModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public cartItems: Product[],
    private dialogRef: MatDialogRef<PurchaseModalComponent>,
    private cartService: CartService
  ) {

  }

  ngOnInit(){
    this.cartService.loadLocalStorage()
    this.cartItems  = this.cartService.getCartItems()
  }

  calculateTotal() {
    return this.cartItems.reduce(
      (total,item, cantidad)=> total + item.price.value, 0);
  }

  purchase() {
    this.cartService.clearCart();
    this.cartItems = [];


    this.dialogRef.close();
  }

}
