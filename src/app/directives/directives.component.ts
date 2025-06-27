import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  isServerRunning = true;

  message: string= "";

  onMouseOver() {
    this.message = 'SANTHOSH 🚀 this is a mouese over';
  }

  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
    {id: 5, name: 'Sarah'},
    {id: 6, name: 'Amy'},
    {id: 7, name: 'Rachel'},
    {id: 8, name: 'Jessica'},
    {id: 9, name: 'Poornima'},
  ];

}
