import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
 
import {HeroiService} from '../../services/heroi.service';
 
import {Heroi} from '../../services/heroi.model'
 
import {Response} from '../../services/response';
 
@Component({
    selector: 'app-consulta-heroi',
    templateUrl: './consulta-heroi.component.html',
    styleUrls:["./consulta-heroi.component.scss"]
  })
  export class ConsultaHeroiComponent implements OnInit {
 
    private herois: Heroi[] = new Array();
    private titulo:string;
 
    constructor(private heroiService: HeroiService,
                private router: Router){}
 
    ngOnInit() {
 
      /*SETA O TÍTULO */
      this.titulo = "Registros Cadastrados";
 
      /*CHAMA O SERVIÇO E RETORNA TODAS AS heroiS CADASTRADAS */
      this.heroiService.getHerois().subscribe(res => this.herois = res);
    }
 
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    excluir(id:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.heroiService.excluirHeroi(id).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){
                alert(res.mensagem);
                this.herois.splice(index,1);
              }
              else{
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {                    
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });        
      }
 
    }
 
    editar(id:number):void{
 
      this.router.navigate(['/cadastro-heroi',id]);
 
    }
 
  }
