import { Component, OnInit } from '@angular/core';
import { ApiClientService, Article } from '../../services/api-client.service';
import { Location } from '@angular/common';
import { debounceTime } from 'rxjs';

@Component({
    templateUrl:'article.component.html',
    styleUrls:['article.component.scss'],

})
export class ArticleComponent implements OnInit{

    articles:Article[]=[];

    constructor(private apiClientService: ApiClientService, private location: Location){
        
    } 
    ngOnInit():void{
       this.apiClientService.getArticle().subscribe((data: Article[])=>{
            this.articles=data;
           
        });
    }

    
    back(){
        this.location.back();
    }

}
