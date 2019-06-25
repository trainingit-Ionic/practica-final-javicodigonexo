import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  productos = []; 
  checks = []; 
  searchText:string;
  no = 0;
  productosSaved = [];
  productosTmp = this.storage.get('productos').then( valores => this.productosSaved = valores );

  constructor(private storage: Storage) {
    this.productos = [];
  }
  search(){
    if(this.searchText.length > 2){
      console.log(this.productosSaved);
      this.productos = [];
      this.productos.push(this.searchText);
      for(var e in this.productosSaved){
        if(this.searchText != this.productosSaved[e]){
          if(this.productosSaved[e].indexOf(this.searchText) >= 0){
            this.productos.push(this.productosSaved[e]);
          }
        }
      }
      //this.productos = [this.searchText, 'tomate', 'patatas', 'morcilla'];
    }else{
      this.productos = [];
    }
  }
  removeFocus(){
    this.productos = [];
  }
  addNote(item:string){
    this.productos = [];
    if(!this.productosSaved){
      this.productosSaved = []
      this.productosSaved.push(item);
      this.storage.set('productos', this.productosSaved);
    }else{
      if(this.productosSaved.indexOf(item) < 0){
        this.productosSaved.push(item);
        this.storage.set('productos', this.productosSaved);
      }
    }
    this.checks.push(item);
  }

  remove(no:number){
    
    (this.checks).splice(no, 1);
  }
}
