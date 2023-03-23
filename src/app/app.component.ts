import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './services/api-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private apiclient: ApiClientService) {}
  ngOnInit(): void {}
}
