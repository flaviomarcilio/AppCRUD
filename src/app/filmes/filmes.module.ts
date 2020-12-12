import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MaterialModule } from '../shared/material/material.module';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { CamposModule } from '../shared/components/campos/campos.module';
import { VisualizarFilmeComponent } from './visualizar-filme/visualizar-filme.component';



@NgModule({
  declarations: [
    CadastroFilmesComponent,
    ListagemFilmesComponent,
    VisualizarFilmeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ]
})
export class FilmesModule { }
