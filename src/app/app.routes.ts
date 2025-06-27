import { Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DirectivesComponent } from './directives/directives.component';
import { AngularQRcodeComponent } from './angular-qrcode/angular-qrcode.component';



export const routes: Routes = [
    {
        path: '',
        title: 'App input Page',
        component: InputComponent,
    },
    {
        path: 'output',
        title: 'App output Page',
        component: OutputComponent,
    },
    {
        path: 'directives',
        title: 'App output Page',
        component: DirectivesComponent,
    },
    {
        path: 'qrcode',
        title: 'App qrcode Page',
        component: AngularQRcodeComponent ,
    },
];
