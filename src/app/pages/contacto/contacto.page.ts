import { Component, OnInit} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import Leaflet from 'leaflet';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  // @ViewChild('map') mapContainer: ElementRef;
  mapa: any;
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.loadmap();
  }

  ionViewWillEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }

  loadmap(): void {
    let myIcon = Leaflet.divIcon({
      className: 'iconArca',
      html: '<img src="../../assets/images/ubicacionArca.png">',
      iconSize: [32, 32]
    });

    let myIconPeople = Leaflet.divIcon({
      className: 'iconArca',
      html: '<img src="../../assets/images/miubucacion.png">',
      iconSize: [32, 32]
    });

    this.mapa = Leaflet.map("map").fitWorld();

    Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© Open Street Map',
      minZoom: 8,
      maxZoom: 10,
      doubleClickZoom: true,
    }).addTo(this.mapa);
    this.mapa.locate({
      setView: true,
      maxZoom: 30.3
    })
    let markerGroup = Leaflet.featureGroup();

    let marker: any = Leaflet.marker([18.468233, -97.419373], { icon: myIcon });
    marker.bindPopup("<b>Control de bienestar canino y felino</b>"
      + "<br><b>Direccion: Av. López Mateos"
      + "<br><b>8:00 am - 16:00pm ").openPopup();
    markerGroup.addLayer(marker);

    this.geolocation.getCurrentPosition().then((resp) => {
      let lat = resp.coords.latitude;
      let long = resp.coords.longitude;
      let marker2: any = Leaflet.marker([lat, long], { icon: myIconPeople });
      marker2.bindPopup("<b>Mi ubicación</b>").openPopup();
      markerGroup.addLayer(marker2);
    });
    this.mapa.addLayer(markerGroup);

  }


}
