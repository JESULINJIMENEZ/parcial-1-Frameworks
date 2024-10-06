import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() showAddModulEvent = new EventEmitter<void>();
  @Output() showModulListEvent = new EventEmitter<void>();

  showAddModul() {
    this.showAddModulEvent.emit();
  }

  showModulList() {
    this.showModulListEvent.emit();
  }
}