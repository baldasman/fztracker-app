import { ChangeDetectorRef, Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';
import { EntityMovementModel } from '../models/entity-movement.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  connected: boolean = false;
  cardNumber: string = null;
  cardId: string = null;
  serial: string = null;
  photo: string = "/assets/default.jpg";
  rankName: string = "Posto e Nome";
  polo: string = "Polo";
  gdh: string = "---";
  cardInfo: string = "Numero Cartão";
  color: string = ""
  resources = [];
  selectedResource: string = 'NOCAR';
  cardcontrol: string;
  private statusTimer = null;

  constructor(
    public alertCtrl: AlertController,
    private nfc: NFC,
    private ndef: Ndef,
    private changeRef: ChangeDetectorRef,
    private nativeStorage: NativeStorage,
    private modalCtrl: ModalController,
    private apiService: ApiService
  ) {
    this.connected = apiService.connected;

    this.statusTimer = setInterval(() => {
      this.connected = apiService.connected;
      console.log('update status icon', this.connected);
      this.changeRef.detectChanges();
    }, 5000);

    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);


      // Search card by id
      this.cardId = this.nfc.bytesToHexString(event.tag.id);
      this.serial =null;
      this.cardNumber = null;
      //  this.cardId = '0412FD1AE66C81';
      console.log('nfc', this.cardId);
      this.searchCard();
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
      this.resources.push({ serial: newPlate });
      this.selectedResource = newPlate;
    }
  }

  //adicionar movimento à base de dados 
  AddMovement() {
    this.logAccess();
  }

  async searchCardByNumber() {
    this.cardNumber = "0";
    this.cardId = null;
    this.color = "";


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
          text: 'Cancelar',
          handler: data => {
          }
        },

        {
          text: 'Pesquisar',
          handler: data => {

            const x: string = data.cardnumber;

            if (x.toLowerCase().startsWith("m") || x.toLowerCase().startsWith("a") || x.toLowerCase().startsWith("c") || x.toLowerCase().startsWith("v")) {

              console.log("cartao");
              this.cardcontrol = data.cardnumber;
              this.cardNumber = data.cardnumber;
              this.serial = null;
            } else {
              this.serial = data.cardnumber; //todo uma ou outra
              this.cardcontrol = null;
              this.cardNumber = null;
            }

            /*   if (data.cardnumber.length != 5) {
  
  
                this.cardInfo = "Número inválido!";
                this.color = "danger";
                this.cardNumber = null;
                this.cardId = null;
                return;
              } */


            // Call API
            this.searchCard();
          }
        }
      ]
    });

    await prompt.present();
  }

  private searchCard() {
    // Call API
    const cardInfoResponse = this.apiService.getCardInfo(this.cardNumber, this.cardId, this.serial);
    cardInfoResponse.subscribe(response => {
      const rawData: any = response;
      const entity = rawData.data.entities[0];

      if (this.cardcontrol != entity.cardNumber) {
        this.cardInfo = "Número inválido!";
        this.color = "danger";
        //  this.cardNumber = null;
        //    this.cardId = null;

        this.changeRef.detectChanges();
        return;
      }

      console.log(rawData.data.entities[0]);



      console.log('a entidade' + entity);
      this.cardInfo = entity.cardNumber;

      this.cardId = entity.cardId;
      this.color = '';
      this.photo = `${this.apiService.getApi()}/assets/userPhotos/${entity.serial}.bmp`;
      this.rankName = `${entity.name}`;

      //this.polo = entity.location;

      // Load plates
      if (entity.resources) {
        this.resources = entity.resources.map(r => { return { serial: r.serial.replace(/-/g, '') } });

        if (this.resources.length > 0) {
          this.selectedResource = this.resources[0].serial;
        } else {
          this.selectedResource = 'NOCAR';
        }
      }

      this.changeRef.detectChanges();
    }, error => {
      this.cardInfo = "Número inválido!";
      this.color = "danger";
      this.cardNumber = null;
      this.cardId = null;

      this.changeRef.detectChanges();
    });
  }

  private logAccess() {
    const movement = new EntityMovementModel();
    movement.location = this.apiService.getLocation();
    movement.manual = true;
    movement.cardNumber = this.cardNumber;
    movement.inOut = true;
    movement.sensor = this.apiService.getSensorId();
    movement.cardId = this.cardId;
    movement.plate = this.selectedResource;

    const card = this.apiService.addMovement(movement);
    card.subscribe(response => {
      const data: any = response['data'];
      this.gdh = `${data.movement.inOut ? "Entrada" : "Saída"} às ${moment(data.movement.movementDate).format("DD-MM-YYYY HH:mm")}`;

      this.changeRef.detectChanges();
    }, error => {
      console.error('[ACCESS]', error);
    });
  }
}
