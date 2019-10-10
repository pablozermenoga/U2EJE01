import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts={
    initialSlide:0,
    speed:200
  };

  gallery=[
    {
      img:"http://yosoydenayarit.com/wp-content/uploads/2015/09/Plaza-de-Armas-en-Tepic-Nayarit-620x400.jpg  ",
      subtitle:"Destino",
      title:"Tepic, Nayarit",
      content:"Fundada en 1532, en tepic"
    },
    {
      img:"http://a.uan.mx/im/540,290,1,90,1,i/tepic_1.jpg",
      subtitle:"Destino",
      title:"Tepic, Nayarit",
      content:"Fundada en 1532, en tepic"
    },  

  ]

  


  constructor() {}

}
