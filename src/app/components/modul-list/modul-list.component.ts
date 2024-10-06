import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';

@Component({
  selector: 'app-modul-list',
  templateUrl: './modul-list.component.html',
  styleUrls: ['./modul-list.component.scss']
})
export class ModulListComponent implements OnInit {
  @Input() moduls: ModulInterface[] = [];
  @Output() editModul = new EventEmitter<ModulInterface>();
  @Output() deleteModul = new EventEmitter<number>();

  searchText: string = '';
  filteredModuls: ModulInterface[] = [];

  ngOnInit() {
    this.filteredModuls = [...this.moduls]; // Inicializar filteredModuls con todos los módulos al inicio
  }

  ngOnChanges() {
    this.applyFilter(); // Llamar a applyFilter() cuando hay cambios en moduls
  }

  applyFilter() {
    if (!this.searchText.trim()) {
      this.filteredModuls = [...this.moduls]; // Restaurar todos los módulos si el campo de búsqueda está vacío
    } else {
      const lowerCaseSearch = this.searchText.trim().toLowerCase();
      this.filteredModuls = this.moduls.filter(modul =>
        modul.name_modul.toLowerCase().includes(lowerCaseSearch)
      );
    }
  }

  onEdit(modul: ModulInterface) {
    this.editModul.emit(modul);
  }

  onDelete(id: number) {
    // Emitir evento de eliminación al componente padre
    this.deleteModul.emit(id);

    // Actualizar la lista filtrada después de eliminar
    this.moduls = this.moduls.filter(modul => modul.id_modul !== id);
    this.applyFilter();
  }
}
