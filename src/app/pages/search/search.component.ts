import { Component, ViewChild, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime , distinctUntilChanged, switchMap, Observable, startWith,map } from 'rxjs';
import { ApiClientService, Search } from 'src/app/services/api-client.service';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput')
  searchInput = new FormControl('');
  search$:Observable<string>
  results: Search[]=[];
  results$:Observable<Search[]>

  constructor(private apiClientService: ApiClientService) {}
  
  ngOnInit(): void {
    this.search$=this.searchInput.valueChanges.pipe(
      map((event)=>(event.target as HTMLInputElement).value),
      distinctUntilChanged(),     
      startWith(''),
      debounceTime(300),
       
     )

     this.results$=this.search$.pipe(
      switchMap((value)=>{
        return this.apiClientService.search(value);
      })
   
     )
     this.results$.subscribe(results=>
      { this.results=results})

  }
 
   
  }
  
  


