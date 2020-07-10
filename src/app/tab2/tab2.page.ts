import { Component } from '@angular/core';
import {ResProviderService} from  '../services/res-provider.service' ; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  infos :any 
  constructor(private rest : ResProviderService, ) {
    this.getInfo();
  }

  getInfo(){
    this.rest.getInfo()
    .then(data =>{
      this.infos = data ;
      console.log(this.infos);

    });
  }

}
