import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon, IonListHeader, IonToolbar, IonBackButton, IonFabButton, IonButtons, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-categoryhome',
  templateUrl: './categoryhome.component.html',
  styleUrls: ['./categoryhome.component.scss'],
  imports: [IonHeader, IonButtons,
      IonBackButton,
      IonContent,
      IonToolbar],
})
export class CategoryHomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
