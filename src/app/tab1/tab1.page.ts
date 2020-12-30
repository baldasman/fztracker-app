import { ChangeDetectorRef, Component, platformCore } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  photo: string = "/assets/default.jpg";
  rankName: string = "Posto e Nome";
  polo: string = "Polo";
  gdh: string = "---";
  ManualCardNumber: string = "Numero Cartão";
  color: string = ""
  resources = [];
  selectedResource: string = 'NOCAR';

  constructor(
    public alertCtrl: AlertController,
    private nfc: NFC,
    private ndef: Ndef,
    private changeRef: ChangeDetectorRef,
    private nativeStorage: NativeStorage,
    private modalCtrl: ModalController,
    private apiService: ApiService
  ) {
    /*this.nativeStorage.setItem('baseUrl', 'host....')
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );

    this.nativeStorage.getItem('baseUrl')
      .then(
        data => {
          console.log('read baseUrl from storage', data)
        },
        error => console.error(error)
      );
      */

    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      let uid = this.nfc.bytesToHexString(event.tag.id);
      //this.logAccess(uid);

      //044ac5caa46581, 
      //046290f2286781
      if (uid == "044ac5caa46581") {
        this.photo = `/assets/photos/oscar1.jpg`;
        this.rankName = `1SAR FZ Rui Bastos`;
        this.polo = "EF";
        //this.gdh = `${data.entity.inOut?"Entrada":"Saída"} às ${moment(data.entity.lastMovementDate).format("DD-MM-YYYY HH:mm")}`;

        this.changeRef.detectChanges();
      } else if (uid == "046290f2286781") {
        this.photo = `/assets/photos/oscar2.jpg`;
        this.rankName = `CIVIL Mariana Teixeira`;
        this.polo = "EF";
        this.changeRef.detectChanges();
      }
    });
  }

  logAccess(cardId: any) {
    const movement = {
      location: "123456789",
      cardNumber: "M0001",
      inOut: false,
      sensor: "123456789",
      cardId: cardId,
      manual: false,
    };

    const card = this.apiService.createMovement(movement);
    card.subscribe(response => {
      const data: any = response;
      console.log('my data: ', data);

      //ver isto !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
      this.photo = `${environment.api}/assets/photos/${data.entity.permanent.serial}.jpg`;
      this.rankName = `${data.entity.nopermanent.rank} ${data.entity.permanent.name}`;
      this.polo = data.entity.nopermanent.polo;
      this.gdh = `${data.entity.inOut ? "Entrada" : "Saída"} às ${moment(data.entity.lastMovementDate).format("DD-MM-YYYY HH:mm")}`;

      this.changeRef.detectChanges();
    }, error => {
      console.error('[ACCESS]', error);
    });
  }


  //open modal add viatura
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: DepositModalComponent,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    
    if (data && data.plate) {
      const newPlate = data.plate.replace(/-/g, '');
      this.resources.push({serial: newPlate});
      this.selectedResource = newPlate;
    }
  }


  //adicionar movimento à base de dados 
  AddMovement() {

    console.log("teste botão")
  }




  async ManualNumberCard() {

    this.ManualCardNumber = "Numero Cartão"
    this.color = ""

    const prompt = await this.alertCtrl.create({

      header: 'Número do Cartão',
      message: 'Introduz o número do cartão',
      inputs: [
        {
          name: 'cardnumber',
          type: 'text',
          placeholder: 'exemplo M0023'
        },

      ],
      buttons: [
        {
          text: 'Sair',
          handler: data => {
            console.log('Sair');

          }
        },
        {
          text: 'Pesquisar',
          handler: data => {
            if (data.cardnumber.length != 5) {
              this.ManualCardNumber = "Número inválido!";
              this.color = "danger";

              return;
            }

            // Call API
            const cardInfoResponse = this.apiService.getCardInfo(data.cardnumber);
            cardInfoResponse.subscribe(response => {
              const rawData: any = response;

              if (rawData.data.records < 1) {
                this.ManualCardNumber = "Número inválido!";
                this.color = "danger";

                this.changeRef.detectChanges();
                return;
              }

              const entity = rawData.data.entities[0];
              console.log('my card: ', entity);

              this.ManualCardNumber = entity.cardNumber;
              this.photo = `${environment.api}/assets/userPhotos/${entity.permanent.serial}.bmp`;
              this.rankName = `${entity.nopermanent.rank} ${entity.permanent.name}`;
              this.polo = entity.nopermanent.location;
              this.color = '';

              // Load cars
              if (entity.resources) {
                this.resources = entity.resources.map(r => {return {serial: r.serial.replace(/-/g, '')}});

                if (this.resources.length > 0) {
                  this.selectedResource = this.resources[0].serial;
                } else {
                  this.selectedResource = 'NOCAR';
                }
              }

              this.changeRef.detectChanges();
            }, error => {
              console.error('[CARD]', error);

              this.ManualCardNumber = "Número inválido!";
              this.color = "danger";

              this.changeRef.detectChanges();
            });
          }
        }
      ]
    });

    await prompt.present();
  }










}


