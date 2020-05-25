import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public locations = [];

  constructor(private socket: Socket) {}

  ngOnInit() {

    navigator.geolocation.watchPosition(data => {

      const location = {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude
      };

      this.socket.emit("my-location", location);

    })

    this.socket.on("locations", (data) => {
      this.locations = data;
    });

  }

}
