import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestBtnComponent } from './test-btn/test-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TestBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'toto';
}
