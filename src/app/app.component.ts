import { Component, VERSION } from "@angular/core";
import { Estudiante, Profesor, Facultad } from "../model/Modelos";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // Variable usada para capturar datos del formulario
  estudiante: Estudiante = new Estudiante;
  // Variable usada para almacenar los estudiantes capturados en el fomulario
  estudiantes: Estudiante[] = [];

  guardar() {
    alert(this.estudiante.Codigo);
  }
}
