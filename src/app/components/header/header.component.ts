import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Router } from '@angular/router';
import { ThemeService } from './../../services';

const themes = {
  color1: {
    primary: '#c90000',
    secondary: '#06a6b8',
  },
  color2: {
    primary: '#560079',
    secondary: '#ecb500',
  },
  color3: {
    primary: '#fa4f00',
    secondary: '#560079',
  },
  color4: {
    primary: '#bd9103',
    secondary: '#c0c404',
  },
  color5: {
    primary: '#002b75',
    secondary: '#c90000',
  }
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private color1 = 'color1';
  private color2 = 'color2';
  private color3 = 'color3';
  private color4 = 'color4';
  private color5 = 'color5';


  @ViewChild(IonSegment) s: IonSegment;

  constructor(
    private router: Router,
    private theme: ThemeService,
  ) { }

  ngOnInit() {
    this.s.value = 'adopta';
    this.theme.setTheme(themes[this.color1]);
  }

  ionViewWillEnter() {
    document.addEventListener('backbutton', function (e) { }, false);
  }

  segmentChanged(event) {
    const page = event.detail.value;
    switch (page) {
      case 'adopta':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(themes[this.color1]);
        break;
      case 'noticias':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(themes[this.color2]);
        break;
      case 'tips':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(themes[this.color3]);
        break;
      case 'denuncia':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(themes[this.color4]);
        break;
      case 'contacto':
        this.router.navigate(['header/' + page]);
        this.theme.setTheme(themes[this.color5]);
        break;
    }
  }
}

