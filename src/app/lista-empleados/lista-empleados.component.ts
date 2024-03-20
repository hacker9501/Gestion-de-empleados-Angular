import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  //intancio a la clase para acceder a sus propiedades
  empleado: Empleado[];
  
  //injectar en el constuctor para el servicio
  constructor(private route:ActivatedRoute,
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  //llamar la funcion privada en ngOnInit
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  //actualiza
  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  //elimina
  // eliminarempleado(id: number) {
  //   this.empleadoService.eliminarEmpleado(id).subscribe((dato) => {
  //     console.log(dato);
  //     this.obtenerEmpleados();
  //   });
  // }

  eliminarEmpleado(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: `Confirma si deseas eliminar al empleado `,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
        this.empleadoService.eliminarEmpleado(id).subscribe((dato) => {
          console.log(dato);
          this.obtenerEmpleados();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          );
        });
      }
    });
  }

  verDetalles(id: number) {
    this.router.navigate(['empleados-detalles', id]);
  }

  //obtener a traves de subscribe
  private obtenerEmpleados() {
    this.empleadoService.obtenerListaDeEmpleados().subscribe((dato) => {
      this.empleado = dato;
    });
  }

}
