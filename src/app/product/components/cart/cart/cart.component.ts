import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/product/services/cart/cart.service';
import { PurchaseModalComponent } from '../../purchase-modal/purchase-modal.component';
import { Product } from 'src/app/product/interfaces/product.interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: Product[] = [];

  constructor(
    private cartService: CartService,
    private dialog: MatDialog,
    ) {
        this.cartItems = this.cartService.getCartItems();
    }

    openPurchaseModal(){
      const dialogRef = this.dialog.open(PurchaseModalComponent, {
        width: '500px',
        data: this.cartItems
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      }
      );
    }

}
