import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from "./input/input.component";
import { OutputComponent } from "./output/output.component";
import { NavComponent } from "./nav/nav.component";
import { QrcodeComponent } from './qrcode/qrcode.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, InputComponent, OutputComponent, NavComponent, QrcodeComponent]
})
export class AppComponent {
  title = 'myApp';
}
