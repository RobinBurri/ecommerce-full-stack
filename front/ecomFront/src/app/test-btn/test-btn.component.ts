import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'test-btn',
  templateUrl: './test-btn.component.html',
  standalone: true,
  imports: [ButtonModule],
})
export class TestBtnComponent {
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark-mode');
  }
}
