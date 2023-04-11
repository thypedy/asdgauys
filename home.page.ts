import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule,IonicModule],
})
export class HomePage {
  radioSelecionada:string='';
  op1:string='';
  op2:string='';
  op3:string='';
  op4:string='';
  op5:string='';
  op6:string='';
  op7:string='';
  res:string='';

  constructor(public alertController: AlertController) {}

  selecionar(){
    console.log(this.radioSelecionada + ' ' + this.op1 + ' ' + this.op2 + ' ' + this.op3 + ' ' + this.op4 + ' ' + this.op5 + ' ' + this.op6 + ' ' + this.op7 )
    if (this.radioSelecionada == "nao" && this.op1 == "sim" && this.op2 == "nao" && this.op3 == "nao" && this.op4 =="sim" && this.op5 == "nao" && this.op6 == "nao" && this.op7 == "nao"){
      this.res = "humano";
    }
    else if (this.radioSelecionada == "nao" && this.op1 == "sim" && this.op2 == "sim" && this.op3 == "nao" && this.op4 =="nao" && this.op5 == "nao" && this.op6 == "sim" && this.op7 == "nao"){
      this.res = "girafa";
    }
    else if (this.radioSelecionada == "sim" && this.op1 == "nao" && this.op2 == "sim" && this.op3 == "sim" && this.op4 =="nao" && this.op5 == "nao" && this.op6 == "sim" && this.op7 == "nao"){
      this.res = "gato";
    }
    else if (this.radioSelecionada == "nao" && this.op1 == "nao" && this.op2 == "sim" && this.op3 == "nao" && this.op4 =="nao" && this.op5 == "nao" && this.op6 == "nao" && this.op7 == "sim"){
      this.res = "pato";
    }
    else if (this.radioSelecionada == "nao" && this.op1 == "sim" && this.op2 == "sim" && this.op3 == "nao" && this.op4 =="nao" && this.op5 == "sim" && this.op6 == "sim" && this.op7 == "nao"){
      this.res = "camelo";
    }
    else if (this.radioSelecionada == "nao" && this.op1 == "nao" && this.op2 == "nao" && this.op3 == "nao" && this.op4 =="nao" && this.op5 == "nao" && this.op6 == "nao" && this.op7 == "sim"){
      this.res = "sapo";
    }
    else if (this.radioSelecionada == "nao" && this.op1 == "nao" && this.op2 == "sim" && this.op3 == "nao" && this.op4 =="sim" && this.op5 == "nao" && this.op6 == "nao" && this.op7 == "sim"){
      this.res = "flamingo";
    }
    else if (this.radioSelecionada == "nao" && this.op1 == "nao" && this.op2 == "sim" && this.op3 == "nao" && this.op4 =="nao" && this.op5 == "nao" && this.op6 == "nao" && this.op7 == "nao"){
      this.res = "urubu";
    }
    else if (this.radioSelecionada == "nao" && this.op1 == "nao" && this.op2 == "nao" && this.op3 == "nao" && this.op4 =="nao" && this.op5 == "nao" && this.op6 == "nao" && this.op7 == "nao"){
      this.res = "caracol";
    }
    else if (this.radioSelecionada == "nao" && this.op1 == "nao" && this.op2 == "nao" && this.op3 == "sim" && this.op4 =="sim" && this.op5 == "nao" && this.op6 == "sim" && this.op7 == "sim"){
      this.res = "peixe";
    }

    else{
      this.res = "nenhum animal listada";
    }
    return this.res;
  }

  verificarRadio() {
    this.exibirAlerta();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'O seu animal mentalizado é',
      message: this.selecionar(),
      buttons: ['OK']
    });
    alert.present();
  }
}
