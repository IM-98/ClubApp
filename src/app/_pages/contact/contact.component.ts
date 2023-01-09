import { Component, OnInit } from '@angular/core';
import { Marker, Position } from '../../models/Position';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',

})
export class ContactComponent implements OnInit {


  zoom = 6;

  center: google.maps.LatLngLiteral = {
    lat: 46.00000000,
    lng: 2.00000000,
  };
  
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 2,
  };

  addresses = [
    '8 Rue Pierre Mendes France, 47550 Boé',
    '1 bd Gaston Birg, 49100 Angers',
    '8 Rue de Bordeaux, 16000 Angoulême',
    'Lycée René Cassin 2 Rue de Lasseguette, 64100 Bayonne',
    '28 rue Édouard Faure, 33300 Bordeaux',
    "7 rue Croix Buchilien 87000 Limoges"
  ];

  markers: Marker[] = [];


  geocodeAddress(address: string) {
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results) {
          resolve(results[0].geometry.location);
        } else {
          reject(status);
        }
      });
    });
  }
  
  
  

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    this.addresses.forEach(async (address) => {
      try {
        const position = await this.geocodeAddress(address);
        this.markers.push({
          position,
          label: {
            color: 'red',
          },
          title: address,
        });
      } catch (error) {
        console.error(error);
      }
    });
   
  }



zoomIn() {
  if (this.options.maxZoom)
    if (this.zoom < this.options.maxZoom) this.zoom++;
}
zoomOut() {
  if (this.options.minZoom)
    if (this.zoom > this.options.minZoom) this.zoom--;
}


}


