import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/services/api-client.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
templateUrl:'articledetail.component.html',
styleUrls:['articledetail.component.scss']
})

export class ArticleDetail implements OnInit {
    article:Article;
    constructor(private activatedRoute:ActivatedRoute, private location:Location){}
    ngOnInit():void{
       this.activatedRoute.data.subscribe((data:any)=> this.article=data.article)
     
    }
    back(){
      this.location.back();
  }
}