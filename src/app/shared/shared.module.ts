import { FormsModule } from "@angular/forms";
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PaginaNaoEncontradaComponent
  ],
  imports: [RouterModule,
    FormsModule
  ],
  exports:[
    FormsModule
  ],
  providers: []
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ]
    }
  }
}
