import { Component, EventEmitter, Output } from '@angular/core';
import { ModulInterface } from '../../interfaces/modul.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-modul',
  templateUrl: './add-modul.component.html',
  styleUrls: ['./add-modul.component.scss']
})
export class AddModulComponent {
  @Output() addModul = new EventEmitter<ModulInterface>();

  newModul: ModulInterface = {
    id_modul: 0,
    name_modul: '',
    imageUrl_modul: '',
    teacher_modul: '',
    numberStudents_modul: 0,
    description_modul: '',
    dateStart_modul: new Date(),
    dateEnd_modul: new Date(),
    type_modul: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.addModul.emit(this.newModul);
      this.newModul = {
        id_modul: 0,
        name_modul: '',
        imageUrl_modul: '',
        teacher_modul: '',
        numberStudents_modul: 0,
        description_modul: '',
        dateStart_modul: new Date(),
        dateEnd_modul: new Date(),
        type_modul: ''
      };
    } else {
      // Mostrar mensaje de error de validación
      alert('Por favor complete todos los campos.');
    }
  }
}
