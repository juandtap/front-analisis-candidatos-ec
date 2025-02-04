import {Component, HostListener} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgClass} from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-analisis',
  imports: [
    FormsModule,
    NgClass,
    CommonModule,
  ],
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css'
})
export class AnalisisComponent {
  candidatos: string[] = [
    'Daniel Noboa',
    'Luisa González',
    'Andrea González',
    'Pedro Granja',
    'Henry Kronfle',
    'Francesco Tabbachi',
    'Henry Cucalón',
    'Leonidas Iza',
    'Jimmy Jairala',
    'Jorge Escalada',
    'Luis Felipe Tillería',
    'Carlos Rabascall',
    'Juan Iván Cueva',
    'Víctor Araus',
    'Enrique Gómez',
    'Iván Saquicela',
  ]

  partidos = [
    { nombre: 'Daniel Noboa', partido: 'Acción Democrática Nacional', imagen: 'Daniel Noboa-modified.png', aceptacion: 45 },
    { nombre: 'Luisa González', partido: 'Revolución Ciudadana - RETO', imagen: 'Luisa González-modified.png', aceptacion: 35 },
    { nombre: 'Andrea González', partido: 'Sociedad Patriótica', imagen: 'Andrea González-modified.png', aceptacion: 10 },
    { nombre: 'Pedro Granja', partido: 'Partido Socialista Ecuatoriano', imagen: 'Pedro Granja-modified.png', aceptacion: 1 },
    { nombre: 'Henry Kronfle', partido: 'Partido Social Cristiano', imagen: 'Henry Kronfle-modified.png', aceptacion: 2 },
    { nombre: 'Francesco Tabbachi', partido: 'CREO', imagen: 'Francesco Tabacchi-modified.png', aceptacion: 1 },
    { nombre: 'Henry Cucalón', partido: 'Construye', imagen: 'Henry Cucalón-modified.png', aceptacion: 1 },
    { nombre: 'Leonidas Iza', partido: 'Pachakutik', imagen: 'Leonidas Iza-modified.png', aceptacion: 1 },
    { nombre: 'Jimmy Jairala', partido: 'Centro Democrático', imagen: 'Jimmy Jairala-modified.png', aceptacion: 1 },
    { nombre: 'Jorge Escalada', partido: 'Unidad Popular', imagen: 'Jorge Escalada-modified.png', aceptacion: 1 },
    { nombre: 'Luis Felipe Tillería', partido: 'Avanza', imagen: 'Felipe Tillería-modified.png', aceptacion: 1 },
    { nombre: 'Carlos Rabascall', partido: 'Izquierda Democrática', imagen: 'Carlos Rabascall-modified.png', aceptacion: 1 },
    { nombre: 'Juan Iván Cueva', partido: 'AMIGO', imagen: 'Juan Cueva-modified.png', aceptacion: 1 },
    { nombre: 'Víctor Araus', partido: 'Pueblo, Igualdad y Democracia', imagen: 'Víctor Araus-modified.png', aceptacion: 1 },
    { nombre: 'Enrique Gómez', partido: 'SUMA', imagen: 'Enrique Gomez-modified.png', aceptacion: 1 },
    { nombre: 'Iván Saquicela', partido: 'Democracia Sí', imagen: 'Iván Saquicela-modified.png', aceptacion: 1 }
  ];

  fuentes: string[] = ['Youtube', 'Reddit', 'Facebook']


  presenciaRedes: any[] = [];

  constructor() {
    this.generarDatosRedes();
  }

  generarDatosRedes() {
    this.presenciaRedes = this.fuentes.map(fuente => ({
      fuente,
      porcentaje: Math.floor(Math.random() * 100) + 1
    }));
  }

  ngAfterViewInit() {
    this.generarGraficaAceptacion();
    this.generarGraficaRedes();
  }

  generarGraficaAceptacion() {
    const ctx = document.getElementById('graficoAceptacion') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Muy Bueno', 'Bueno', 'Neutral', 'Malo', 'Muy Malo'],
        datasets: [{
          label: 'Nivel de Aceptación (%)',
          data: [Math.random() * 40, Math.random() * 30, Math.random() * 20, Math.random() * 10, Math.random() * 5],
          backgroundColor: ['#4CAF50', '#8BC34A', '#FFC107', '#FF5722', '#D32F2F']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  generarGraficaRedes() {
    const ctx = document.getElementById('graficoRedes') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.presenciaRedes.map(r => r.fuente),
        datasets: [{
          label: 'Presencia en Redes Sociales (%)',
          data: this.presenciaRedes.map(r => r.porcentaje),
          backgroundColor: ['#FF0000', '#FF4500', '#3b5998']
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  seleccionCandidatos: string[] = [];
  seleccionFuentes: string[] = [];

  mostrarCandidatos: boolean = false;
  mostrarFuentes: boolean = false;

  @HostListener('document:click', ['$event'])
  clickFuera(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.mostrarCandidatos = false;
      this.mostrarFuentes = false;
    }
  }

  toggleSeleccion(lista: string[], item: string) {
    if (item === 'Seleccionar Todos') {
      if (lista.length === this.candidatos.length) {
        lista.length = 0;  // Desmarcar todo
      } else {
        lista.length = 0;
        lista.push(...this.candidatos);  // Seleccionar todos
      }
    } else if (item === 'Seleccionar Todas') {
      if (lista.length === this.fuentes.length) {
        lista.length = 0;
      } else {
        lista.length = 0;
        lista.push(...this.fuentes);
      }
    } else {
      if (lista.includes(item)) {
        lista.splice(lista.indexOf(item), 1);
      } else {
        lista.push(item);
      }
    }
  }


  comenzarAnalisis() {
    console.log('Candidatos seleccionados:', this.seleccionCandidatos);
    console.log('Fuentes seleccionadas:', this.seleccionFuentes);
  }
}
