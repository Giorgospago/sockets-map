import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBnUp5T0AiklY5AspJHUO3kn8z1mjJ_KbY"
    }),
    SocketIoModule.forRoot({url: "https://api.maps.develobird.com"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
