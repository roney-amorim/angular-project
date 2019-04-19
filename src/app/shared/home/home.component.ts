import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cliente: any = {};
  clientes: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  inserirLista(cliente: any){
    if(this.clientes.filter(c => c.nome === cliente.nome) !== null){
      this.clientes.push({nome: cliente.nome, email: cliente.email});
    }
  }

  removerLista(cliente: any){
    this.clientes = this.clientes.filter(c => c.nome !== cliente.nome);
  }

}
