import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from "./input/input.component";
import { OutputComponent } from "./output/output.component";
import { NavComponent } from "./nav/nav.component";
import { AngularQRcodeComponent } from './angular-qrcode/angular-qrcode.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, InputComponent, OutputComponent, NavComponent,AngularQRcodeComponent ]
})
export class AppComponent {
  title = 'myApp';
}
