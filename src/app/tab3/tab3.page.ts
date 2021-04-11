import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  todo = {
    local: '',
    movelName: '',
    ip:'',
    mail: '',
    pass: '',
  };

  constructor(private nativeStorage: NativeStorage, private apiService: ApiService) { }

  ngOnInit() {
    document.getElementById('123').hidden = true;
    document.getElementById('122').hidden = false;


  };


  async login(form) {


    

    if ((Object.entries(form.value).toString()) == "email,1,password,2") {
      console.log("correcto", form)
      document.getElementById('123').hidden = false;
      document.getElementById('122').hidden = true;
     
      this.nativeStorage.getItem("config").then(
        data => {
          console.log(data);
  
          if (data) {
            this.todo = JSON.parse(data);
          };
        },
        error => console.error(error)
      );
     
     
      setTimeout(function () {
        console.log("agora")
        
        document.getElementById('123').hidden = true;
        document.getElementById('122').hidden = false;
        form.reset();

      }, 30000);
    };




  }

  async saveMovel() {
  environment.api = this.todo.ip;
    console.log("teste salvar", this.todo)

    // utilizar estes dados para cadastrar equipamento  e guardar local de registo. 
    this.nativeStorage.setItem("config", JSON.stringify(this.todo)).then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );

const info = await this.apiService.signIn(this.todo.mail, this.todo.pass).toPromise();
    environment.token = info.token;
    this.nativeStorage.setItem("token", info.token).then(
      () => console.log('Stored item!', info),
      error => console.error('Error storing item', error, info)
    );

  }




}


