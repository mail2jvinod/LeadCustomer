import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon, IonListHeader, IonToolbar, IonBackButton, IonFabButton, IonButtons, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-brandhome',
  templateUrl: './brandhome.component.html',
  styleUrls: ['./brandhome.component.scss'],
  imports: [IonHeader, IonButtons,
    IonBackButton,
    IonContent,
    IonToolbar],
})
export class BrandHomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
