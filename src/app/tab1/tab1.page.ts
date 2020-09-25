import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import * as moment from 'moment';
import * as Constants from '../services/constants';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //photo: string = "/assets/default.jpg";
  photo: string = `${Constants.API_ENDPOINT}/assets/photos/oscar2.jpg`;
  rankName: string = "Posto e Nome";
  polo: string = "Polo";
  gdh: string = "---";
  ManualCardNumber: string="Numero Cartão";
  color: string =""



  constructor(public alertCtrl: AlertController, public httpClient: HttpClient, private nfc: NFC, private ndef: Ndef, private changeRef: ChangeDetectorRef, private nativeStorage: NativeStorage, private modalCtrl: ModalController) {
    /*this.nativeStorage.setItem('baseUrl', 'http://localhost:8000')
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );

    this.nativeStorage.getItem('baseUrl')
      .then(
        data => {
          console.log('read baseUrl from storage', data)
          Constants.API_ENDPOINT = data;
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


    // Call API
    const params = {

      location: "123456789",
      cardNumber: 1,

      inOut: false,
      sensor: "123456789",
      cardId: cardId,
      manual: false,
    };
    ;
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiJtb3JlaXJhLnNvdXNhQG1hcmluaGEucHQiLCJzZXNzaW9uSWQiOiI2ODZhZjQwMC1jN2IxLTExZWEtYjUwZi1mNTBlZmZjZjc2N2MiLCJzZXNzaW9uVHlwZSI6ImFwaSIsIm51bWJlck9mTG9naW5zIjoxLCJsYXN0TG9naW5EYXRlIjoxNTk0OTM3NTM2LCJ0dGwiOjE3MjgwMCwiY3JlYXRlZEF0IjoxNTk0OTM3NTM2LCJpYXQiOjE1OTQ5Mzc1MzZ9.HkQyEyn71Oevm3Mv_TRzqv3L7mwBL86O1kEFHT9rV03992-4bu8Q7wCtXbA02fZr5dUchwxeYcV47CmNomz_4fpawok_sYaTa9MDEUvcLpD_8L7LqIxYgd9OuD0zhqMlWD2ZYssNKl04OiDZAeVbW6H1evtvhwU3ki6D807AhsZHRgbbzrqeWqvUMZoN3skMzcLnDfyIu3tj3SuWd2wz0xJxt91ixJryzQIdgNVHXdZoBOMXFPgtvLIqtVZ8WhGzSM7E1ufPrgJk_xe0dMhcA5zX72CyVL_1kia0Q6YBMvbDQ_ruL3acuDOmK60tKs8vV06ndrZddj53JXZ2HRfihYBEM3NB11JUcusx1W14HHSbPcHdusfH2qChx6tiCTnqqZPREEOd9pPcDDoYHNkY6akp9eZMICKbJJ0ZU1msi_iTYmJeZU4kjUkmksaA3OWeYxBOxRAHCt3ytH2WpjfMaBg0QcqrapAPO8oiRFS6I3rKLbwgoP1PK2NSM6W6oLfeQSVHknXAictQfHWxq_GWwY528v1Bbsryhsh-VDXg9A8WWC_oPd-NBGcenTtBRFX-7gmXMoezpeOQ7XihM-qWsieYkHeYP2MgdXGAXgHqvriP_fvhqCBiqpMvZ3w5XgvSG0Cc1IMA-GzFNopcjDriMkhnamTLo-txv2yE-CGbzHU";
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + token);
    console.log('logAccess: ', params, headers);
    let options = { headers: headers };
    const card = this.httpClient.post(Constants.API_ENDPOINT + '/fztracker/v1/entities/movement', params, options);
    card.subscribe(response => {
      const data: any = response
      console.log('my data: ', data);
      //ver isto !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
      this.photo = `${Constants.API_ENDPOINT}/assets/photos/${data.entity.permanent.serial}.jpg`;
      this.rankName = `${data.entity.nopermanent.rank} ${data.entity.permanent.name}`;
      this.polo = data.entity.nopermanent.polo;
      this.gdh = `${data.entity.inOut ? "Entrada" : "Saída"} às ${moment(data.entity.lastMovementDate).format("DD-MM-YYYY HH:mm")}`;

      this.changeRef.detectChanges();
    }, error => {
      console.error('[ACCESS]', error);
    })
  }




  



//open modal add viatura
  async openModal() {

    const modal = await this.modalCtrl.create({
      component: DepositModalComponent


    });

    await modal.present();
  }


  //adicionar movimento à base de dados 
  AddMovement(){

  console.log("teste botão")
      }




      async ManualNumberCard() {  

        this.ManualCardNumber = "Numero Cartão"
        this.color=""

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
              text: 'Salvar',  
              handler: data => {  
                console.log();  
                if(data.cardnumber.length != 5 ) {this.ManualCardNumber = "Número inválido!"; this.color="danger"}
                if(data.cardnumber != "" && data.cardnumber.length == 5 ) {this.ManualCardNumber = data.cardnumber.toUpperCase()};
              

              }  
            }  
          ]  
        });  
        await prompt.present();  

      }




      





}


