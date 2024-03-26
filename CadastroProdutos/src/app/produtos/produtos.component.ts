import { Component } from '@angular/core';

interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos: Produto[] = [];
  produto: Produto = {
    id: '',
    nome: '',
    descricao: '',
    preco: 0,
    quantidade: 0
  };

  constructor() { }

  salvarProduto() {
    this.produtos.push(this.produto);
    this.produto = {
      id: '',
      nome: '',
      descricao: '',
      preco: 0,
      quantidade: 0
    };
  }
}