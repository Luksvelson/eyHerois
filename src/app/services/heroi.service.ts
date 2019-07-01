import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
 
import { Heroi } from '../services/heroi.model';
import { ConfigService } from '../services/config.services';


@Injectable()
export class HeroiService {
 
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;
 
    constructor(private http: Http,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/Heroi/';
 
        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODAS AS HeroiS CADASTRADAS */
    getHerois(){        
        return this.http.get(this.baseUrlService).map(res => res.json());
    }
 
    /**ADICIONA UMA NOVA Heroi */
    addHeroi(Heroi: Heroi){
 
        return this.http.post(this.baseUrlService, JSON.stringify(Heroi),this.options)
        .map(res => res.json());
    }
    /**EXCLUI UMA Heroi */
    excluirHeroi(id:number){
 
        return this.http.delete(this.baseUrlService + id).map(res => res.json());
    }
 
    /**CONSULTA UMA Heroi PELO CÓDIGO */
    getHeroi(id:number){
 
        return this.http.get(this.baseUrlService + id).map(res => res.json());
    }
 
    /**ATUALIZA INFORMAÇÕES DA Heroi */
    atualizarHeroi(Heroi:Heroi){
 
        return this.http.put(this.baseUrlService, JSON.stringify(Heroi),this.options)
        .map(res => res.json());
    }
 
}