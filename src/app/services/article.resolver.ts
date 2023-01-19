import { Injectable } from "@angular/core";
import { RouterStateSnapshot, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiClientService,Article } from "./api-client.service";

@Injectable()

export class ArticleResolver implements Resolve<Article>{

    constructor(private apiClient:ApiClientService){}
   resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Article>{
    return this.apiClient.getArticleDetail(parseInt(route.paramMap.get('id'),10));

   }
}