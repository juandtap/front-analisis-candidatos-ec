import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isOpen = true; // Estado inicial: navbar abierto

  // Función para alternar el estado del navbar
  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

}
