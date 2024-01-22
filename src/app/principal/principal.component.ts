import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone:false,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  //varialvel para visibilidade dos botoes
  bntCadastro:boolean = true;

  //objeto do tipo cliente
  cliente = new Cliente();


  //JSON de clientes
  clientes:Cliente[] = [];

  constructor(private servico:ClienteService){

  }

  //metodo de selecao
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  //metodo de inicializacao
  ngOnInit(){
    this.selecionar();
  }
}
