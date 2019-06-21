import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ProfileComponent } from './profile/profile.component';
import { SelectComponent } from './select/select.component';
import { TableComponent } from './table/table.component';
import { CapitalsPipe } from './capitals.pipe';
import { RoutesComponent } from './routes/routes.component';
import { UserComponent } from './user/user.component';
import { UsersServiceService } from './users-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HighlightComponent,
    ProfileComponent,
    SelectComponent,
    TableComponent,
    CapitalsPipe,
    RoutesComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
