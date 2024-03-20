import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css'],
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // guardarEmpleado() {
  //   this.empleadoService.registrarEmpleado(this.empleado).subscribe(
  //     (dato) => {
  //       console.log(dato);
  //       this.irALaListaEmpleados();
  //     },
  //     (error) => console.log(error)
  //   );
  // }

  guardarEmpleado(empleado:Empleado) {    
        this.empleadoService.registrarEmpleado(empleado).subscribe((dato) => {
          console.log(dato);
          this.guardarEmpleado;
          swal(
            'Empleado registrado',
            `El empleado ${(this.empleado.nombre)} ha sido registrado con exito`,
            'success'
          );
        });
        this.irALaListaEmpleados();
  }

  irALaListaEmpleados() {
    this.router.navigate(['/empleados']);
  }

  registro() {
    this.guardarEmpleado(this.empleado);
  }
}
