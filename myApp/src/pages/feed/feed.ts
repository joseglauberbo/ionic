import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public nome_usuario:string = "Glauber Braz";
  public lista_filmes = new Array<any>();
  public page = 1;
  public infiniteScroll;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController,
    ) {
  }

  public somaDeDoisNumeros(num1:number, num2:number, num3:number): void {
    //alert(num1+num2+num3);
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id} );
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newpage: boolean = false) {
    this.abreCarregando();
    this.movieProvider.getLatestMovie(this.page).subscribe( 
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        if(newpage) {
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = objeto_retorno.results;
        }
        
       
        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        this.fechaCarregando();
        console.log(error);
      }
    )
  }
}
