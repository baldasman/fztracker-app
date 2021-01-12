import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  todo = {
    local: '',
    movelName: '',
    mail: '',
    pass: '',
  };
 
  constructor() {}

  ngOnInit() {
    document.getElementById('123').hidden = true;
    document.getElementById('122').hidden = false;
  };


login(form){
 
  
 

  if ( (Object.entries(form.value).toString()) == "email,1,password,2") {
         console.log("correcto", form)
         document.getElementById('123').hidden = false;
         document.getElementById('122').hidden = true;
          setTimeout(function(){
            console.log("agora")
            document.getElementById('123').hidden = true;
            document.getElementById('122').hidden = false;
            form.reset();
          
          },20000);
  };
  


  
}

  saveMovel(){console.log ("teste salvar",this.todo)

   // utilizar estes dados para cadastrar equipamento  e guardar local de registo. 



  }




}


