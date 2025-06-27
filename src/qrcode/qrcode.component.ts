import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [FormsModule,QRCodeModule],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.scss'
})
export class QrcodeComponent {
  qrdata = "Certified Angular Js developer JAYAPRIYA Y from Jambavan Software Systems Pvt.Ltd.,";
}
