import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './pages/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './pages/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { ArticleResolver } from './services/article.resolver';
import { ApiClientService } from './services/api-client.service';
import { ArticleDetail } from './pages/articledetail/articledetail.component';
import { SearchComponent } from './pages/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { ListComponent } from './pages/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    ArticleDetail,
    SearchComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [ApiClientService, ArticleResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
