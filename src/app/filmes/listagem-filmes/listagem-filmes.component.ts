import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { FilmesService } from 'src/app/core/filmes.service';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'fm-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly semFoto = 'https://camaramaracanau.ce.gov.br/wp-content/uploads/2018/12/sem-foto.gif';

  config: ConfigParams = {
    pagina: 0,
    limite: 4
  }
  filmes: Filme[] = [];
  filtrosListagem: FormGroup;
  generos: Array<string>;
  
  constructor(private filmesService: FilmesService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero: ['']
    });

    this.filtrosListagem.get('texto').valueChanges
      .pipe(debounceTime(400))
      .subscribe((value: string) => {
      this.config.pesquisa = value;
      this.resetarConsulta();
    });

    this.filtrosListagem.get('genero').valueChanges.subscribe((value: string) => {
      this.config.campo = {tipo: 'genero', valor: value};
      this.resetarConsulta();
    })

    this.generos = ['Ação', 'Aventura', 'Comédia', 'Drama','Ficção Científica', 'Romance', 'Terror'];

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }  

  private listarFilmes(): void {
    this.config.pagina++;
    this.filmesService.listar(this.config)
      .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }

}
