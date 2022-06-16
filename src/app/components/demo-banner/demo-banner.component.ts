import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServbannerService } from 'src/app/servicio/servibanner.service';
import { banner } from 'src/modelo/banner';

@Component({
  selector: 'app-demo-banner',
  templateUrl: './demo-banner.component.html',
  styleUrls: ['./demo-banner.component.css']
})
export class DemoBannerComponent implements OnInit {

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
}
