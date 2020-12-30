import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent {

  AddNewPlate: string;
  getSelectedSubject: string = "Viatura";
  LabelHelp: string = "Exemplo matricula: 99AA55";
  public anArray: any = [];
  data: boolean;
  todo = {
    plate: '',
    obs: ''
  };

  constructor(private modalCtrl: ModalController, public alertController: AlertController) { }

  dismissModal() {
    this.modalCtrl.dismiss();

  }

  // Falta ligar a Mongo Para guardar viaturas e outros.


  /* getSelectedSubjectValue(getSelectedSubject){
  var Label = getSelectedSubject
  if (Label == "Visita" ) {this.LabelHelp="Nome da Visita, Número de BI da visita. EX (Marco silva, 6521454)"};
  if (Label == "Nota" ) {this.LabelHelp="Nota associada a este movimento"};
  if (Label == "Viatura" ) {this.LabelHelp="Exemplo matricula: 99AA55" };
  } */

  async savePlate() {

    if (this.todo.plate) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Detalhes',
        subHeader: null,
        message: this.todo.plate ? 'A ' + this.getSelectedSubject + '  ' + this.todo.plate + ' será adicionada à entidade.' : null,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('cancelou');
            }
          },
          {
            text: 'Guardar',
            handler: () => {
              this.modalCtrl.dismiss(this.todo), '', 'OK';
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.modalCtrl.dismiss(this.todo), '', 'OK';
    }
  }
}