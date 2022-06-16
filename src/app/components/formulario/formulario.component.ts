import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServbannerService } from 'src/app/servicio/servibanner.service';
import { banner } from 'src/modelo/banner';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  bann: banner = {
    id: 0,
    urlImageBanner: "",
    textCaption: "",
    descripcionImagen: "",
    ordenSlider: ""
  };
  constructor(private servibanner: ServbannerService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.servibanner.getBannerXIdFecth(params['id'])
        .subscribe((dataBanner: { [x: string]: banner; }) => {
          for (let i in dataBanner) {
            console.log(dataBanner[i]);
            this.bann = (dataBanner[i]);
          }
          console.log("objeto "+this.bann.descripcionImagen)
        })
    })
  }

  ngOnInit(): void {
  }
  async guardar() {
    await this.servibanner.guardarBanner(this.bann);
    //location.reload();
    this.router.navigate(['/tablecrud']);
  }

  addNew(formu: NgForm) {
    this.router.navigate(['/formulario', '0']);
    formu.reset({
      id: 0,
      urlImageBanner: "",
      textCaption: "",
      descripcionImagen: "",
      ordenSlider: ""
    });
  }
}
