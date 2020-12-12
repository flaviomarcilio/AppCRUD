import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'fm-visualizar-filme',
  templateUrl: './visualizar-filme.component.html',
  styleUrls: ['./visualizar-filme.component.scss']
})
export class VisualizarFilmeComponent implements OnInit {

  readonly semFoto = 'https://camaramaracanau.ce.gov.br/wp-content/uploads/2018/12/sem-foto.gif';

  filme: Filme;

  constructor(private activatedRoute: ActivatedRoute,
              private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.visualizar(this.activatedRoute.snapshot.params['id']);
  }

  private visualizar(id: number): void {
    this.filmesService.visualizar(id).subscribe((filme: Filme) => this.filme = filme);
  }

}
