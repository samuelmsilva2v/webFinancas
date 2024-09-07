import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-contas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-contas.component.html',
  styleUrl: './consulta-contas.component.css'
})
export class ConsultaContasComponent {

  contas: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(environment.apiFinancas + "/api/contas").subscribe({
      next: (data) => {
        this.contas = data as any[];
      }
    })
  }
}
