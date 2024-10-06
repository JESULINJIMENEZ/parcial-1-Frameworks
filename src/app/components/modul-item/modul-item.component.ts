import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';

@Component({
  selector: 'app-modul-item',
  templateUrl: './modul-item.component.html',
  styleUrl: './modul-item.component.scss'
})
export class ModulItemComponent {
  @Input() modul!: ModulInterface;
  @Output() editModul = new EventEmitter<ModulInterface>();
  @Output() deleteModul = new EventEmitter<number>();

  onEdit() {
    this.editModul.emit(this.modul);
  }

  onDelete() {
    this.deleteModul.emit(this.modul.id_modul);
  }
}
