import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';

@Component({
  selector: 'app-edit-modul',
  templateUrl: './edit-modul.component.html',
  styleUrl: './edit-modul.component.scss'
})
export class EditModulComponent {
  @Input() modul!: ModulInterface;
  @Output() updateModul = new EventEmitter<ModulInterface>();

  onSubmit() {
    this.updateModul.emit(this.modul);
  }

}
