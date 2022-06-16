import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { banner } from 'src/modelo/banner';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServbannerService {

  //  instrumentosFile: any = (data as any).default;
  public bannerData: banner[] = [];
  public bannerencontrado: banner = new banner();

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");

  }
  /*public getBanner():any[]{
    return this.bannerData;
    console.log(this.bannerData);
  }

  public getBannerXId(idx:number):any{
      for(let banner of this.bannerData){
          if(banner.id == idx){
            return banner;
          }
      }
  }*/

  //lee todos los banners
  getBanners():any {
    return this.http.get("http://168.194.207.98:8081/api_banner/get_banners.php").pipe(
      map(bannerData => bannerData));
  }
  //busca un banner por el id
  getBannerXIdFecth(id: string):any {
    return this.http.get("http://168.194.207.98:8081/api_banner/get_banner.php?id="+id).pipe(
      map(bannerencontrado => bannerencontrado));
  }
  
  
  async deleteBanner(idbanner: number){
    console.log("id a eliminar "+idbanner)
    let urlServer = "http://168.194.207.98:8081/api_banner/delete_banner.php?id="+idbanner;
    console.log(urlServer);
    let result = await fetch(urlServer, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        mode: 'cors'
    });
  }
  async guardarBanner(ban:banner){
    let urlServer = 'http://168.194.207.98:8081/api_banner/post_banner.php';
    let method:string= 'POST';
    if(ban.id!==0){
    urlServer = 'http://168.194.207.98:8081/api_banner/put_banner.php';
    method = 'PUT';
    }
    await fetch(urlServer, { 
      "method": method,
      "body": JSON.stringify(ban),
      "headers": {
        "Content-type": 'application/json'
      },
      mode:'cors'
    });
  }


  
}
