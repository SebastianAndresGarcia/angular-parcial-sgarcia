import { Component, NgModule, OnInit } from '@angular/core';
import { banner } from 'src/modelo/banner';
import { ServbannerService } from 'src/app/servicio/servibanner.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tablecrud',
  templateUrl: './tablecrud.component.html',
  styleUrls: ['./tablecrud.component.css']
})
export class TablecrudComponent implements OnInit {


  bannerArr: banner[] = [];
  

  constructor(private servibanner: ServbannerService, private activatedRoute: ActivatedRoute) {
    
  }



  ngOnInit(): void {
    this.servibanner.getBanners() 
    .subscribe((dataBanner: { [x: string]: banner; }) => {
      for(let bann in dataBanner){
        console.log(dataBanner[bann]);
        this.bannerArr.push(dataBanner[bann]);
      }
      
    })
  }
  delete(idbanner:number){
    console.log("idbanner "+idbanner)
    var opcion = confirm("Esta seguro que desea eliminar el banner?");
    if (opcion == true) {
      this.servibanner.deleteBanner(idbanner);
      location.reload();
    }

  }
}
