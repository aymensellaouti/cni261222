import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  /*
1- crée un event
2- il met la data dans l'event
3- envoi l'event (au besoin)
*/
  // 1- Crée event
  @Output()
  sendMessageToDad = new EventEmitter<string>();
  // 2 + 3 ma 7ararch
  sendData(): void {
    this.sendMessageToDad.emit('cc papa');
  }
}
