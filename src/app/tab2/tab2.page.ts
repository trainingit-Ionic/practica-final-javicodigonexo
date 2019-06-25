import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  productos = []; 
  constructor(private storage: Storage) {
    this.storage.get('productos').then( valores => this.productos = valores );
  }
  remove(no:number){
    (this.productos).splice(no, 1);
    this.storage.set('productos', this.productos);
  }
}
