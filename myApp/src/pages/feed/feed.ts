import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]

})

export class FeedPage {

  public objeto_feed = {
      titulo: "Glauber Braz",
      data: "March 28, 2018",
      descricao: "i'm making a incredible app",
      qt_likes: 12,
      qt_comentarios: 4,
      tempo_comentario: "11h ago"
  }

  public nome_usuario:string = "Glauber Braz";
  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  public somaDeDoisNumeros(num1:number, num2:number, num3:number): void {
    //alert(num1+num2+num3);
  }

  ionViewDidLoad() {
    //this.somaDeDoisNumeros(10,60,30);
    //this.somaDeDoisNumeros(-1,2,3);
    this.movieProvider.getLatestMovie().subscribe( 
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
