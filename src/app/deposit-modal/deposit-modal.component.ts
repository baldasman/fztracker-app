import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();

  }

// Falta ligar a Mongo Para guardar viatura.
  savePlate() {
    
console.log("teste save")

    var tex = getElementById("savelabel")
    console.log(document.getElementById("searchTxt").value)  
  

  }
  

}
