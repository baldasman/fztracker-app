import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { ChangeDetectorRef } from '@angular/core'

import * as moment from 'moment';


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

  constructor( public httpClient: HttpClient, private nfc: NFC, private ndef: Ndef, private changeRef: ChangeDetectorRef) {
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
        this.photo = `/assets/oscar1.jpg`;
        this.rankName = `1SAR FZ Rui Bastos`;
        this.polo = "EF";
        //this.gdh = `${data.entity.inOut?"Entrada":"Saída"} às ${moment(data.entity.lastMovementDate).format("DD-MM-YYYY HH:mm")}`;

        this.changeRef.detectChanges();
      } else if (uid == "046290f2286781") {
        this.photo = `/assets/oscar2.jpg`;
        this.rankName = `CIVIL Mariana Teixeira`;
        this.polo = "EF";
        this.changeRef.detectChanges();
      }
    });
  }

  logAccess(cardId: any) {
    

    // Call API
    const params = {

      location:"123456789",
      cardNumber:1,
      
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
    console.log('logAccess: ',params, headers);
    let options ={ headers: headers };
    const card = this.httpClient.post('http://192.168.2.10:8000/fztracker/v1/entities/movement', params, options);
    card.subscribe(response => {
      const data: any = response
      console.log('my data: ', data);
     //ver isto !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
     this.photo = `http://192.168.1.168:8081/img/militares/${data.entity.permanent.serial}.jpg`;
     this.rankName = `${data.entity.nopermanent.rank} ${data.entity.permanent.name}`;
     this.polo = data.entity.nopermanent.polo;
     this.gdh = `${data.entity.inOut?"Entrada":"Saída"} às ${moment(data.entity.lastMovementDate).format("DD-MM-YYYY HH:mm")}`;

      this.changeRef.detectChanges();
    }, error => {
      console.error('[ACCESS]', error);
    })
  }



  
    





}