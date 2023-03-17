import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  @Input() title:string = ''
  @Input() options:string[]=[]
  @Output() changes = new EventEmitter()
  detectedChanges(event:Event){
    this.changes.emit(event)
  }
}
