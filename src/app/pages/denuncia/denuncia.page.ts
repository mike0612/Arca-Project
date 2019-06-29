import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { Denuncias } from 'src/app/models/user.model';


@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage implements OnInit {
  
  idSelected:any; 
  show:boolean; 
  denuncias = []; 
  denuncia :Denuncias={ 
    asunto:'',
    nombre_de_quien_reporta:'',
    numero_de_telefono:'',
    direccion: '',
    entre_calles:'',
    referencia_del_lugar:'',
    describa_su_asunto:'',
    caracteristicas_de_las_mascotas:'',
    nombre_duenio:'',
    direccion_2:'',
    entre_calles2:'',
    referencias_2:'',
    caracteristicas_mascotas2:''
  }; 


  constructor( private alertController: AlertController, 
    public navCtrl: NavController, public denunciaservices:  DatabaseService) {
    this.show = false; 
       this.idSelected = 0; 
    
  denunciaservices.getDenuncias()
      .subscribe(denuncias=>{
        this.denuncias = denuncias;
      });
   }
   saveDenuncia(){
    if(this.idSelected != 0){
      this.denunciaservices.updateDenuncia(this.denuncia);
    }else{
      this.denunciaservices.saveDenuncia(this.denuncia);
    }
    this.clear();
  }
  
  clear(){
    
    this.show = false;
    this.idSelected = 0;
    this.denuncia.asunto = null;
    this.denuncia.id = null;
    
  }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Su acuse ha sido enviado',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
