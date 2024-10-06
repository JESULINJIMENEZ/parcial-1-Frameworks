import { Component } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  moduls: ModulInterface[] = [];
  selectedModul: ModulInterface | null = null;
  isEditing: boolean = false;
  isAdding: boolean = false;

  constructor() {
    // trae del localstorage
    this.moduls = JSON.parse(localStorage.getItem('moduls') || '[]');
  }

  addModul(modul: ModulInterface) {
    // sube al localstorage
    modul.id_modul = this.moduls.length + 1;
    this.moduls.push(modul);
    this.isAdding = false;
    localStorage.setItem('moduls', JSON.stringify(this.moduls));
  }

  editModul(modul: ModulInterface) {
    this.selectedModul = modul;
    this.isEditing = true;
  }

  updateModul(modul: ModulInterface) {
    const index = this.moduls.findIndex(m => m.id_modul === modul.id_modul);
    if (index !== -1) {
      this.moduls[index] = modul;
      this.isEditing = false;
      this.selectedModul = null;
      localStorage.setItem('moduls', JSON.stringify(this.moduls));
    }
  }

  deleteModul(id: number) {
    this.moduls = this.moduls.filter(modul => modul.id_modul !== id);
    localStorage.setItem('moduls', JSON.stringify(this.moduls));
  }

  showAddModul() {
    this.isAdding = true;
    this.isEditing = false;
    this.selectedModul = null;
  }

  showModulList() {
    this.isAdding = false;
    this.isEditing = false;
    this.selectedModul = null;
  }

}

