import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado:Empleado;

  constructor(private route:ActivatedRoute,private empleadoService:EmpleadoService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado;
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      swal(
        'Detalle Empleado',
        `Detalle del empleado ${(dato.nombre)}`,
        `success`
      );
      this.empleado = dato;
      console.log(dato);
    });
  }
}
