import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'analisis-candidatos-ec';
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;
  @ViewChild(HeaderComponent) header!: HeaderComponent;
}
