import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// whenever you want to make any component or a module portable in
// another module, then you would always prepend the export to the class here.

// siempre que se quiera exportar un componente o modulo para poder ser
// importado en otra clase, se debe utilizar la palabra reservada "export"
export class AppComponent {
  title = 'conFusion';
}
