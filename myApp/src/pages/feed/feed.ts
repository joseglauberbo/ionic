import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})

export class FeedPage {

  public nome_usuario:string = "Glauber Braz";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDeDoisNumeros(num1:number, num2:number, num3:number): void {
    //alert(num1+num2+num3);
  }

  ionViewDidLoad() {
    //this.somaDeDoisNumeros(10,60,30);
    //this.somaDeDoisNumeros(-1,2,3);
  }

}
