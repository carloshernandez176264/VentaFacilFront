import { Component } from '@angular/core';
import { CartService } from 'src/app/product/services/cart/cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent {

  modalSwitch:boolean = false;

constructor(private cartService:CartService) { }


openCentrado(contenido: any) {
    this.modalSwitch = true;
    console.log("open modal");
  }

  closeModal(){
    this.modalSwitch = false;
    console.log("close modal");
  }

}
