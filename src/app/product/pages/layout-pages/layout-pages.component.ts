import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ModalService } from '../../services/modal/modal.service';
import { PurchaseModalComponent } from '../../components/purchase-modal/purchase-modal.component';

@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.component.html',
  styleUrls: ['./layout-pages.component.css']
})
export class LayoutPagesComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private modalService: ModalService,
    ) { }

    ngOnInit(){
      console.log("Layout")
    }

    openCartModal(){
      this.modalService.openModal(PurchaseModalComponent, null, '400px');
    }


}
