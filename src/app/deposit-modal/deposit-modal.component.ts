import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { Label } from 'ionic-angular';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent {

  AddNewPlate: string;
  getSelectedSubject: string ="Viatura";
  LabelHelp: string="Exemplo matricula: 99AA55";
  public anArray:any=[];
  data: boolean;



  constructor(private modalCtrl: ModalController,  public alertController: AlertController) { }

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
    const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Adicionar',
          subHeader: '' + this.getSelectedSubject,
          message: 'A ' + this.getSelectedSubject + '  '+ this.AddNewPlate+ ' será adicionada' ,
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

                        //falta aqui codigo para adicionar mov à DB
                        this.modalCtrl.dismiss();
                      }
                    }
                  ]
        });
            await alert.present();
            
          }




        

         
         














}