import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
@Component({
  selector: 'app-angular-qrcode',
  standalone: true,
  imports: [FormsModule ,QRCodeModule],
  templateUrl: './angular-qrcode.component.html',
  styleUrl: './angular-qrcode.component.scss'
})
export class AngularQRcodeComponent {
  qrdata = "Certified Angular Js developer JAYAPRIYA Y from Jambavan Software Systems Pvt.Ltd.,";
}
